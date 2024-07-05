'use client';

import { Button, Card, Code } from '@repo/ui/components';
import { SendIt } from '../actions';
import React from 'react';

export default function About() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Submitted!');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About</h1>
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
      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
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
