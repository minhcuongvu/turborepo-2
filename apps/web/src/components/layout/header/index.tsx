'use client';

import { Button, Header } from '@repo/ui/components';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function HeaderComponent() {
  const router = useRouter();
  return (
    <Header>
      <Button
        type="button"
        direction="bottom-right"
        haveBorder={true}
        onClick={() => router.push('/about')}
      >
        About
      </Button>
      <Button type="button" direction="right" haveBorder={true}>
        Explore
      </Button>
      <Button type="button" direction="top-right" haveBorder={true}>
        Footer
      </Button>
    </Header>
  );
}
