'use server';

import { getSomeData } from '@/actions/example-actions';
import { Card } from '@repo/ui/components';
import { LinksPanel } from '@repo/ui/components';

export default async function LinksPanelComponent() {
  const links = await getSomeData();
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
