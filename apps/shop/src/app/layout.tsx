import type { Metadata } from 'next';
import './globals.css';
import '@repo/ui/styles.css';
import StoreProvider from './StoreProvider';
export const metadata: Metadata = {
  title: {
    template: '%s | Shop',
    default: 'Shop',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
