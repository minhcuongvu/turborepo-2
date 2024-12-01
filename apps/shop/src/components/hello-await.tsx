'use server';

import { Hello } from '@repo/ui/components';
import { delay } from '@repo/utils/helper';

export default async function HelloAwait() {
  await delay(1000);
  return <Hello />;
}
