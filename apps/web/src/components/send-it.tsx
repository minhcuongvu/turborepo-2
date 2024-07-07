'use client';

import { useState, useEffect } from 'react';
import { sendIt } from '@/actions/example-actions';
import { Button } from '@repo/ui/components';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

async function sendRequest(
  url: string,
  { arg }: { arg: { username: string } }
) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export default function SendIt() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, error } = useSWR(shouldFetch ? '/api/hello' : null, fetcher);

  const {
    trigger,
    isMutating,
    // data: mutationData,
    // error: mutationError,
  } = useSWRMutation('/api/hello', sendRequest);

  const handleFetchClick = () => {
    setShouldFetch(true);
  };

  const handleSendClick = async () => {
    try {
      const result = await trigger({ username: 'johndoe' });
      console.log('Response data', result);
    } catch (e) {
      console.error('Failed to send data', e);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      console.log('Fetching data...');
    }
  }, [shouldFetch]);

  useEffect(() => {
    if (data) {
      console.log('Fetched data', data);
      setShouldFetch(false);
    }
  }, [data]);

  // useEffect(() => {
  //   if (mutationData) {
  //     console.log('Mutation response data', mutationData);
  //   }
  // }, [mutationData]);

  // useEffect(() => {
  //   if (mutationError) {
  //     console.error('Mutation error', mutationError);
  //   }
  // }, [mutationError]);

  return (
    <>
      <form action={sendIt}>
        <Button appName="web" type="submit">
          Send it
        </Button>
      </form>
      <form action={sendIt}>
        <Button appName="web" type="button" onClick={handleFetchClick}>
          Fetch Data
        </Button>
      </form>

      {error && <div>Failed to load</div>}

      {shouldFetch && !data && <div>Loading...</div>}

      {data && <div>{JSON.stringify(data, null, 2)}</div>}

      <form action={sendIt}>
        <Button
          appName="web"
          type="button"
          onClick={handleSendClick}
          disabled={isMutating}
        >
          {isMutating ? 'Sending...' : 'Send Data'}
        </Button>
      </form>
    </>
  );
}
