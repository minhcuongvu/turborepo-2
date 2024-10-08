'use client';

import { Footer } from '@repo/ui/components';

export default function FooterComponent() {
  return (
    <Footer className="border-black dark:border-white">
      <span className="text-black dark:text-white">
        {new Date().getFullYear()}
      </span>
    </Footer>
  );
}
