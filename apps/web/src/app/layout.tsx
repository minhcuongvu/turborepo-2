import type { Metadata } from 'next';
import './globals.css';
import '@repo/ui/styles.css';
import StoreProvider from './StoreProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: {
    template: '%s | App',
    default: 'App',
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
        <SpeedInsights />
      </body>
    </html>
  );
}
