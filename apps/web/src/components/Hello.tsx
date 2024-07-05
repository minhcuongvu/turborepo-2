import { delay } from '@/utils/helper';
import { Code } from '@repo/ui/components';

export default async function Hello() {
  await delay(1000);
  return (
    <div data-testid="testid-322">
      <Code>Hello</Code>
    </div>
  );
}
