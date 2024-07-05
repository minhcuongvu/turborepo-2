import { Button, Card, Code } from '@repo/ui/components';
import { SendIt } from '@/actions/exampleActions';
import React, { Suspense } from 'react';
import { unstable_noStore } from 'next/cache';
import Skeleton from '@/components/Skeleton';
import { delay } from '@/utils/helper';
import LinksPanel from '@/components/LinksPanel';

interface PageParamProps {
  params: any;
  searchParams: { [key: string]: string | undefined };
}

function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log('Submitted!');
}

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
        <LinksPanel />
      </Suspense>
    </main>
  );
}
