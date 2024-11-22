import { NextResponse } from 'next/server';

interface CacheEntry {
  status: 'ok' | 'error';
  timestamp: number;
  error?: {
    code: string;
    message: string;
  };
}

const cache = new Map<string, CacheEntry>();

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const FETCH_TIMEOUT = 5_000;
const ALLOWED_DOMAINS = ['https://meteors.cc'];

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('target');

  if (!target) {
    return NextResponse.json(
      {
        status: 'error',
        error: {
          code: 'InvalidTarget',
          message: 'Missing target parameter',
        },
      },
      { status: 400 }
    );
  }

  const cachedResult = cache.get(target);
  const now = Date.now();

  if (cachedResult && now - cachedResult.timestamp < CACHE_DURATION) {
    return NextResponse.json(
      cachedResult.status === 'ok' ? { status: 'ok', target } : { status: 'error', error: cachedResult.error }
    );
  }

  if (!ALLOWED_DOMAINS.some(domain => target.startsWith(domain))) {
    return NextResponse.json(
      {
        status: 'error',
        error: {
          code: 'NotAllowedDomain',
          message: 'Domain is not allowed',
        },
      },
      { status: 400 }
    );
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

    await fetch(target, {
      method: 'HEAD',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const result: CacheEntry = {
      status: 'ok',
      timestamp: now,
    };
    cache.set(target, result);

    return NextResponse.json({ status: 'ok', target });
  } catch {
    const errorResult: CacheEntry = {
      status: 'error',
      timestamp: now,
      error: {
        code: 'NetworkError',
        message: 'Network error',
      },
    };
    cache.set(target, errorResult);

    return NextResponse.json({
      status: 'error',
      error: errorResult.error,
    });
  }
}
