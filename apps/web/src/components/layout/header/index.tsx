'use client';

import { Button, Header } from '@repo/ui/components';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import NavComponent from '../navbar';

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function HeaderComponent() {
  return (
    <Header className="pt-6 pb-6">
      <NavComponent />
    </Header>
  );
}
