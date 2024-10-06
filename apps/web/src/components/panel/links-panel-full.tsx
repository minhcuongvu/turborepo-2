'use server';

import { getSomeData } from '@/actions/example-actions';
import { Card } from '@repo/ui/components';
import { LinksPanel } from '@repo/ui/components';

/**
 * LinksPanelComponent
 *
 * An asynchronous React component that fetches a list of links using the
 * `getSomeData` function. Renders a `LinksPanel` containing a series of
 * `Card` components, each displaying a title and a description linked to
 * the specified URL (`href`). Each card is uniquely keyed by its title.
 *
 * @returns {Promise<JSX.Element>} A Promise that resolves to the rendered LinksPanel.
 */
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

