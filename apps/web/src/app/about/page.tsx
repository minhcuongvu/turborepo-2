import { Button, Card, Code } from '@repo/ui/components';
import { SendIt } from '@actions/exampleActions';
import React, { Suspense } from 'react';
import { unstable_noStore } from 'next/cache';

async function GetSomeData() {
  unstable_noStore();
  await delay(2000);

  return (
    <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {LINKS.map(({ title, href, description }) => (
        <Card href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  );
}
function Skeleton() {
  return <h2>Loading something...</h2>;
}

interface PageParamProps {
  params: any;
  searchParams: { [key: string]: string | undefined };
}

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log('Submitted!');
}

// Helper function to create a delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function About({ params, searchParams }: PageParamProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        About
        {searchParams.hello ? `: ${searchParams.hello}` : ''}
      </h1>
      <div data-testid="testid-420">
        <Code>{Date.now()}</Code>
      </div>
      <div>
        <form
          // action and onSubmit cannot be both executed
          action={SendIt} // server side
          // onSubmit={onSubmit} // client side
        >
          <Button appName="web" type="submit">
            Send it
          </Button>
        </form>
      </div>
      <Suspense fallback={<Skeleton />}>
        <GetSomeData />
      </Suspense>
    </main>
  );
}

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
