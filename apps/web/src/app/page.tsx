import HelloAwait from '@/components/hello-await';
import LinksPanelFull from '@/components/links-panel-full';
import { Button, Code, Skeleton } from '@repo/ui/components';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/about">About</Link>
      <Suspense fallback={null}>
        <HelloAwait />
      </Suspense>
      <Button appName="web">Button</Button>
      <Suspense fallback={<Skeleton />}>
        <LinksPanelFull />
      </Suspense>
    </main>
  );
}
