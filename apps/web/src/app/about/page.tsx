import { Button, Card, Code, Skeleton } from '@repo/ui/components';
import { SendIt } from '@/actions/example-actions';
import React, { Suspense } from 'react';
import LinksPanelComponent from '@/components/links-panel-full';

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
        <LinksPanelComponent />
      </Suspense>
    </main>
  );
}
