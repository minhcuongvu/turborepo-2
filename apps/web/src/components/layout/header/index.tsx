'use client';

import { Button, Header } from '@repo/ui/components';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import NavComponent from '../navbar';

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function HeaderComponent() {
  return (
    <Header className="pt-6 pb-8 fixed top-0 w-full z-10">
      <div className='backdrop-blur-md bg-white/10 dark:bg-black/10 border-b-2 border-black/30 dark:border-white/10 absolute top-0 left-0 w-full h-full z-0' />
      <NavComponent />
    </Header>
  );
}
