import type { Metadata } from 'next';
import './globals.css';
import '@repo/ui/styles.css';
import StoreProvider from './StoreProvider';
import { SpeedInsights } from "@vercel/speed-insights/next"

// TODO: put this metadata block somewhere else and call it here
export const metadata: Metadata = {
  title: {
    template: '%s | Shop',
    default: 'Shop',
  },
  description: 'The one-stop shop for all your basic gears, upgrades, utilities and everything else!',
  openGraph: {
    title: 'Shop',
    description: 'The one-stop shop for all your basic gears!',
    url: 'https://michaelvu.shop'
  }
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
