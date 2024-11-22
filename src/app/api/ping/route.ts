import { NextResponse } from 'next/server';

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

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    await fetch(target, {
      method: 'HEAD',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    return NextResponse.json({ status: 'ok', target });
  } catch {
    return NextResponse.json({
      status: 'error',
      error: {
        code: 'NetworkError',
        message: 'Network error',
      },
    });
  }
}
