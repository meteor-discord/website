import { defineCollection, defineConfig, s } from 'velite';

import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const legal = defineCollection({
  name: 'Legal',
  pattern: 'legal/*.mdx',
  schema: s
    .object({
      slug: s.string(),
      title: s.string().max(100),
      date: s.isodate(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { legal },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'min-dark',
        },
      ],
    ],
    remarkPlugins: [],
  },
});
