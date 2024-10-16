/* eslint-disable @typescript-eslint/no-explicit-any */
import * as runtime from 'react/jsx-runtime';

import Image from 'next/image';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  h1: (props: any) => <h1 className="my-4 pb-1 text-3xl font-semibold" {...props} />,
  h2: (props: any) => <h2 className="my-3 text-2xl font-semibold" {...props} />,
  h3: (props: any) => <h3 className="my-3 text-xl font-semibold" {...props} />,
  h4: (props: any) => <h4 className="my-2 text-lg font-semibold" {...props} />,
  h5: (props: any) => <h5 className="my-2 text-base font-semibold" {...props} />,
  h6: (props: any) => <h6 className="my-2 text-sm font-semibold" {...props} />,
  p: (props: any) => <p className="my-2 text-base font-light leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="my-3 list-inside list-disc pl-5" {...props} />,
  ol: (props: any) => <ol className="my-3 list-inside list-decimal pl-5" {...props} />,
  li: (props: any) => <li className="my-1" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="my-3 border-l-2 border-muted-foreground/50 pl-4 italic text-muted-foreground" {...props} />
  ),
  a: (props: any) => <a className="underline" {...props} />,
  hr: () => <hr className="my-6 border-t border-border" />,
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
