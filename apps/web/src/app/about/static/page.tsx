import { Code } from '@repo/ui/components';

export default function Static() {
  return (
    <>
      <Code>{Date.now()}</Code>
    </>
  );
}
