import type { Metadata } from 'next';
import './globals.css';
import '@repo/ui/styles.css';
import StoreProvider from './StoreProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Shop | Your E-commerce Destination',
  description:
    'Discover our amazing products and shop with confidence. Find the best deals and exclusive items.',
  keywords: ['shop', 'e-commerce', 'online store', 'products'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  openGraph: {
    title: 'Shop | Your E-commerce Destination',
    description:
      'Discover our amazing products and shop with confidence. Find the best deals and exclusive items.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Shop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop | Your E-commerce Destination',
    description:
      'Discover our amazing products and shop with confidence. Find the best deals and exclusive items.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
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
