import MainComponent from '@/components/layout/main';
import { Page } from '@/components/page';
import { Code } from '@repo/ui/components';
import { unstable_noStore as noStore } from 'next/cache';
import { cookies } from 'next/headers';

async function ProductQuantity() {
  // can be noStore(), cookies(), headers(), etc. to opt in dynamic rendering, for fetch api to refresh cache
  noStore();
  let res = await fetch('https://catfact.ninja/fact');

  // for something that doesn't expose fetch api, like a database
  // https://www.youtube.com/watch?v=VBlSe8tvg4U
  // unstable_cache()
  // 'use server'
  // revalidateTag('someTag');
  // revalidatePath('somePath');
  // ISR - incremental static regeneration
  // cache()

  //https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering

  let data = await res.json();
  return <h1 className="text-black dark:text-white">{data.fact}</h1>;
}

export default function Product() {
  return (
    <Page>
      <MainComponent>
        <Code className="text-black dark:text-white">{Date.now()}</Code>
        <ProductQuantity />
      </MainComponent>
    </Page>
  );
}
