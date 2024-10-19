import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PackageData } from './constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeAgo(date: Date) {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const elapsed = Math.floor(seconds / secondsInUnit);
    if (elapsed > 0) {
      return formatter.format(-elapsed, unit as Intl.RelativeTimeFormatUnit);
    }
  }

  return 'just now';
}

export function formatText(text: string, width: number): string {
  return text.length > width ? text.substring(0, width - 3) + '...' : text.padEnd(width, ' ');
}

export function generateTable(data: PackageData[]): string {
  const colWidths = [3, 40, 80];

  const header = [
    formatText(' ', colWidths[0]),
    formatText('Package Name', colWidths[1]),
    formatText('GitHub Link', colWidths[2]),
  ].join('  ');

  const divider = colWidths.map(width => '-'.repeat(width)).join('  ');

  const rows = data.map((pkg: PackageData) =>
    [
      formatText(String(data.indexOf(pkg) + 1), colWidths[0]),
      formatText(`${pkg.name}@${pkg.version}`, colWidths[1]),
      formatText(pkg.githubLink, colWidths[2]),
    ].join('  ')
  );

  return [header, divider, ...rows].join('\n');
}
