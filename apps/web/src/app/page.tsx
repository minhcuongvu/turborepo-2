import Image from 'next/image';
import { Button, Card, Code } from '@repo/ui/components';

export default function Home() {
  console.log('HELLO', process.env.HELLO);
  console.log('APP_NODE_ENV', process.env.APP_NODE_ENV);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div data-testid="testid-322">
        <Code className="text-red-500">Hello</Code>
      </div>
      <Button
        appName="web"
        className="mx-auto rounded-full border border-solid flex items-center justify-center text-sm h-10 px-4 hover:border-none hover:bg-white hover:text-black"
      >
        Button
      </Button>
      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
            href={href}
            key={title}
            title={title}
          >
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
