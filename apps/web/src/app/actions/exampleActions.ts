'use server'
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

export async function GetSomeData() {
  await delay(1000);

  return LINKS;
}

// Helper function to create a delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function SendIt() {
  console.log('Send it!');
  console.log('HELLO', process.env.HELLO);
  console.log('APP_NODE_ENV', process.env.APP_NODE_ENV);
}