import { NextResponse } from 'next/server';
import { generateTable } from '~/lib/utils';
import { packages } from '~/lib/constants';

export async function GET() {
  const lastUpdated = '17/10/2024';
  const totalPackages = packages.website.length + packages.application.length;
  const thanks =
    'If you are creator or contributor of one of the packages listed above, thanks for making it possible!';

  const content = `Packages.txt\n____________\n\nLast updated: ${lastUpdated}\nTotal packages: ${totalPackages}\n\n---\n\nmeteor-discord/website\n\n${generateTable(packages.website)}\n\n\n\nmeteor-discord/application\n\n${generateTable(packages.application)}\n\n---\n\n${thanks}`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
