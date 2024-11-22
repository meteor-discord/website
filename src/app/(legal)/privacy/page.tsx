import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';

import { MDXContent } from '~/components/mdx-component';
import { legal } from '#site/content';
import { notFound } from 'next/navigation';
import { timeAgo } from '~/lib/utils';

export default async function Privacy() {
  const privacy = legal.find(p => p.slug === 'privacy');

  if (!privacy) {
    notFound();
  }

  return (
    <div className="mx-auto my-6 flex w-full max-w-[60rem] flex-col p-4 md:my-16">
      <p className="mb-4 flex w-fit rounded-md bg-meteor/15 px-2 py-0.5 text-sm text-meteor">Category: Legal</p>
      <h1 className="mb-2 text-4xl font-semibold">{privacy.title}</h1>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger className="w-fit">
            <p className="text-muted-foreground">Last updated: {timeAgo(new Date(privacy.date))}</p>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {new Date(privacy.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <hr className="my-7" />

      <MDXContent code={privacy.body} />
    </div>
  );
}
