interface Server {
  name: string;
  users: string;
  avatar: string;
  hidden?: boolean;
}

export const servers: Server[] = [
  {
    name: 'Discord',
    users: '1,000,000+',
    avatar:
      'https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg',
  },
];

interface Testimonial {
  name: string;
  avatar: string;
  description: string;
  content: string;
  hidden?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'curldie',
    avatar: 'https://cdn.discordapp.com/avatars/1155174672158167201/2157578d25ab61ed235c3c7a7de03da3.png?size=1024',
    description: 'Meteor Contributor',
    content:
      'Working with Meteor Labs is a fantastic experience. I have been contributing to the project for a year now and it has been a great experience. I highly recommend it to anyone looking for a great Discord bot.',
  },
];

export interface PackageData {
  name: string;
  version: string;
  githubLink: string;
}

export const packages: Record<string, PackageData[]> = {
  website: [
    {
      name: '@radix-ui/react-accordion',
      version: '1.2.1',
      githubLink: 'https://github.com/radix-ui/primitives/tree/main/packages/react/accordion',
    },
    {
      name: '@radix-ui/react-avatar',
      version: '1.1.1',
      githubLink: 'https://github.com/radix-ui/primitives/tree/main/packages/react/avatar',
    },
    {
      name: '@radix-ui/react-icons',
      version: '1.3.0',
      githubLink: 'https://github.com/radix-ui/primitives/tree/main/packages/react/icons',
    },
    {
      name: '@radix-ui/react-navigation-menu',
      version: '1.2.1',
      githubLink: 'https://github.com/radix-ui/primitives/tree/main/packages/react/navigation-menu',
    },
    {
      name: '@radix-ui/react-slot',
      version: '1.1.0',
      githubLink: 'https://github.com/radix-ui/primitives/tree/main/packages/react/slot',
    },
    {
      name: '@radix-ui/react-tooltip',
      version: '1.1.3',
      githubLink: 'https://github.com/radix-ui/primitives/tree/main/packages/react/tooltip',
    },
    {
      name: 'class-variance-authority',
      version: '0.7.0',
      githubLink: 'https://github.com/joe-bell/cva',
    },
    { name: 'clsx', version: '2.1.1', githubLink: 'https://github.com/lukeed/clsx' },
    {
      name: 'embla-carousel-autoplay',
      version: '8.3.0',
      githubLink: 'https://github.com/davidjerleke/embla-carousel',
    },
    {
      name: 'embla-carousel-react',
      version: '8.3.0',
      githubLink: 'https://github.com/davidjerleke/embla-carousel',
    },
    { name: 'next', version: '14.2.15', githubLink: 'https://github.com/vercel/next.js' },
    { name: 'react', version: '18.3.1', githubLink: 'https://github.com/facebook/react' },
    { name: 'react-dom', version: '18.3.1', githubLink: 'https://github.com/facebook/react' },
    { name: 'tailwind-merge', version: '2.5.4', githubLink: 'https://github.com/dcastil/tailwind-merge' },
    { name: 'tailwindcss-animate', version: '1.0.7', githubLink: 'https://github.com/jamiebuilds/tailwindcss-animate' },
    {
      name: '@types/node',
      version: '20.16.11',
      githubLink: 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node',
    },
    {
      name: '@types/react',
      version: '18.3.11',
      githubLink: 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react',
    },
    {
      name: '@types/react-dom',
      version: '18.3.1',
      githubLink: 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom',
    },
    { name: 'eslint', version: '8.57.1', githubLink: 'https://github.com/eslint/eslint' },
    {
      name: 'eslint-config-next',
      version: '14.2.14',
      githubLink: 'https://github.com/vercel/next.js/tree/canary/packages/eslint-config-next',
    },
    { name: 'npm-run-all', version: '4.1.5', githubLink: 'https://github.com/mysticatea/npm-run-all' },
    { name: 'postcss', version: '8.4.47', githubLink: 'https://github.com/postcss/postcss' },
    { name: 'prettier', version: '3.3.3', githubLink: 'https://github.com/prettier/prettier' },
    {
      name: 'prettier-plugin-tailwindcss',
      version: '0.6.8',
      githubLink: 'https://github.com/tailwindlabs/prettier-plugin-tailwindcss',
    },
    {
      name: 'rehype-pretty-code',
      version: '0.14.0',
      githubLink: 'https://github.com/rehype-pretty/rehype-pretty-code',
    },
    { name: 'rehype-slug', version: '6.0.0', githubLink: 'https://github.com/rehypejs/rehype-slug' },
    { name: 'typescript', version: '5.6.3', githubLink: 'https://github.com/microsoft/TypeScript' },
    { name: 'velite', version: '0.2.0', githubLink: 'https://github.com/zce/velite' },
    { name: 'tailwindcss', version: '3.4.14', githubLink: 'https://github.com/tailwindlabs/tailwindcss' },
  ],
  application: [
    {
      name: '@prisma/client',
      version: '5.20.0',
      githubLink: 'https://github.com/prisma/prisma/tree/main/packages/client',
    },
    { name: 'discord.js', version: '14.16.3', githubLink: 'https://github.com/discordjs/discord.js' },
    { name: 'pino', version: '9.4.0', githubLink: 'https://github.com/pinojs/pino' },
    { name: 'typescript', version: '5.6.3', githubLink: 'https://github.com/microsoft/TypeScript' },
    { name: '@eslint/js', version: '9.12.0', githubLink: 'https://github.com/eslint/eslint' },
    {
      name: '@types/bun',
      version: '1.1.11',
      githubLink: 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/bun',
    },
    { name: 'eslint-plugin-regexp', version: '2.6.0', githubLink: 'https://github.com/ota-meshi/eslint-plugin-regexp' },
    { name: 'pino-pretty', version: '11.2.2', githubLink: 'https://github.com/pinojs/pino-pretty' },
    { name: 'prettier', version: '3.3.3', githubLink: 'https://github.com/prettier/prettier' },
    { name: 'prisma', version: '5.20.0', githubLink: 'https://github.com/prisma/prisma' },
    {
      name: 'typescript-eslint',
      version: '8.8.1',
      githubLink: 'https://github.com/typescript-eslint/typescript-eslint',
    },
  ],
};
