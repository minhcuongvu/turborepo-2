'use client';

import { useState, useEffect } from 'react';
import { sendIt } from '@/actions/example-actions';
import { Button } from '@repo/ui/components';
import useSWR, { useSWRConfig } from 'swr';
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
  const { mutate } = useSWRConfig();
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, error, isLoading } = useSWR(
    shouldFetch ? '/api/hello' : null,
    fetcher,
    {
      revalidateIfStale: true,
    }
  );
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchResult, setFetchResult] = useState(null);
  const [postLoading, setPostLoading] = useState(false);
  const [postResult, setPostResult] = useState(null);
  const {
    trigger,
    isMutating,
    // data: mutationData,
    // error: mutationError,
  } = useSWRMutation('/api/hello', sendRequest);

  const handleFetchClick = () => {
    setShouldFetch(true);
    mutate('/api/hello', null, { revalidate: true }); // clear cache/revalidate for this key
    setFetchLoading(true);
  };

  const handleSendClick = async () => {
    try {
      setPostLoading(true);
      const result = await trigger({ username: 'johndoe' });
      console.log('Response data', result);
      setPostLoading(false);
      setPostResult(result);
      // mutate('/api/hello');
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
      setFetchResult(data);
      setFetchLoading(false);
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

      {fetchLoading && <div>Loading...</div>}

      {!fetchLoading && fetchResult && (
        <div>{JSON.stringify(fetchResult, null, 2)}</div>
      )}

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

      {postLoading && <div>...</div>}

      {!postLoading && postResult && (
        <div>{JSON.stringify(postResult, null, 2)}</div>
      )}
    </>
  );
}
