'use server';

import { GetSomeData } from '@/actions/exampleActions';
import { Card } from '@repo/ui/components';
import { LinksPanel } from '@repo/ui/components';

export default async function LinksPanelFull() {
  const links = await GetSomeData();
  return (
    <LinksPanel>
      {links.map(({ title, href, description }) => (
        <Card href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </LinksPanel>
  );
}
