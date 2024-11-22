/* eslint-disable @typescript-eslint/no-explicit-any */

import * as runtime from 'react/jsx-runtime';

import Image from 'next/image';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  h1: (props: any) => <h1 className="mb-4 mt-8 text-3xl font-bold" {...props} />,
  h2: (props: any) => <h2 className="mb-4 mt-8 text-2xl font-semibold" {...props} />,
  h3: (props: any) => <h3 className="mb-4 mt-6 text-xl font-semibold" {...props} />,
  h4: (props: any) => <h4 className="mb-4 mt-6 text-lg font-semibold" {...props} />,
  h5: (props: any) => <h5 className="mb-3 mt-4 text-base font-semibold" {...props} />,
  h6: (props: any) => <h6 className="mb-3 mt-4 text-sm font-semibold" {...props} />,
  p: (props: any) => <p className="mb-4 text-base leading-7" {...props} />,
  ul: (props: any) => <ul className="mb-6 ml-6 list-disc space-y-2" {...props} />,
  ol: (props: any) => <ol className="mb-6 ml-6 list-decimal space-y-2" {...props} />,
  li: (props: any) => <li className="text-base leading-7" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="mb-6 mt-6 border-l-4 border-border bg-muted/50 py-4 pl-6 pr-4 text-muted-foreground"
      {...props}
    />
  ),
  a: (props: any) => <a className="text-meteor hover:underline" {...props} />,
  hr: () => <hr className="my-8 border-t border-border" />,
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  Image,
};
interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
