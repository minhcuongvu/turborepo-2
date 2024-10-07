'use client';

import { Footer, SpanContainer } from '@repo/ui/components';

export default function FooterComponent() {
  return (
    <Footer className="border-black dark:border-white">
      <SpanContainer className="text-black dark:text-white">
        {new Date().getFullYear()}
      </SpanContainer>
    </Footer>
  );
}
