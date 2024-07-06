'use client';

import { ButtonRect, Header } from '@repo/ui/components';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function HeaderComponent() {
  const router = useRouter();
  return (
    <Header>
      <ButtonRect
        type="button"
        direction="bottom-right"
        haveBorder={true}
        onClick={() => router.push('/about')}
      >
        About
      </ButtonRect>
      <ButtonRect type="button" direction="right" haveBorder={true}>
        Explore
      </ButtonRect>
      <ButtonRect type="button" direction="top-right" haveBorder={true}>
        Footer
      </ButtonRect>
    </Header>
  );
}
