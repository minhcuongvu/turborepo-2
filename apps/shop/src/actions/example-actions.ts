'use server';

import { delay } from '@repo/utils/helper';

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

const LINKS = [
  {
    title: 'Docs',
    href: 'https://turbo.build/repo/docs',
    description: 'Find in-depth information about Turborepo features and API.',
  },
  {
    title: 'Learn',
    href: 'https://turbo.build/repo/docs/handbook',
    description: 'Learn more about monorepos with our handbook.',
  },
  {
    title: 'Templates',
    href: 'https://turbo.build/repo/docs/getting-started/from-example',
    description: 'Choose from over 15 examples and deploy with a single click.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new',
    description:
      'Instantly deploy your Turborepo to a shareable URL with Vercel.',
  },
];

export async function getSomeData() {
  await delay(3000);

  return LINKS;
}

export async function sendIt() {
  console.log('Send it!');
  console.log('HELLO', process.env.HELLO);
  console.log('APP_NODE_ENV', process.env.APP_NODE_ENV);
  console.log('API_URL', process.env.API_URL);
  console.log('THEME', process.env.THEME);
}

export async function getTheme() {
  return process.env.THEME;
}
