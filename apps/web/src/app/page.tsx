import Hello from '@/components/Hello';
import LinksPanel from '@/components/LinksPanel';
import Skeleton from '@/components/Skeleton';
import { Button, Code } from '@repo/ui/components';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/about">About</Link>
      <Suspense fallback={null}>
        <Hello />
      </Suspense>
      <Button appName="web">Button</Button>
      <Suspense fallback={<Skeleton />}>
        <LinksPanel />
      </Suspense>
    </main>
  );
}
