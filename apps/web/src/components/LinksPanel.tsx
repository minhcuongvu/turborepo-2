'use server';

import { GetSomeData } from '@/actions/exampleActions';
import { Card } from '@repo/ui/components';

export default async function LinksPanel() {
  const links = await GetSomeData();
  return (
    <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {links.map(({ title, href, description }) => (
        <Card href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  );
}
