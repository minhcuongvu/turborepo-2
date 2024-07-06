'use client';

import { useState, useEffect } from 'react';
import { sendIt } from '@/actions/example-actions';
import { Button } from '@repo/ui/components';
import useSWR from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function SendIt() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, error } = useSWR(shouldFetch ? '/api/hello' : null, fetcher);

  const handleClick = () => {
    setShouldFetch(true);
  };

  useEffect(() => {
    if (shouldFetch) {
      console.log('Fetching data...');
    }
  }, [shouldFetch]);

  useEffect(() => {
    if (data) {
      console.log('Fetched data', data);
    }
  }, [data]);

  return (
    <>
      <form action={sendIt}>
        <Button appName="web" type="submit">
          Send it
        </Button>
      </form>
      <form action={sendIt}>
        <Button appName="web" type="button" onClick={handleClick}>
          Fetch Data
        </Button>
      </form>

      {error && <div>Failed to load</div>}

      {shouldFetch && !data && <div>Loading...</div>}

      {data && <div>{JSON.stringify(data)}</div>}
    </>
  );
}
