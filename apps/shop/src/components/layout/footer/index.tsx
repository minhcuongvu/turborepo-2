'use client';

import { Footer } from '@repo/ui/components';

export default function FooterComponent() {
  return (
    <Footer>
      <span className="text-black dark:text-white">
        {new Date().getFullYear()}
      </span>
    </Footer>
  );
}
