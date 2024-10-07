'use client';

import { Button, Header } from '@repo/ui/components';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import NavComponent from '../navbar';

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function HeaderComponent() {
  return (
    <Header>
      <NavComponent />
    </Header>
  );
}
