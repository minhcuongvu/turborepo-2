import type { Metadata } from 'next';
import './globals.css';
import '@repo/ui/styles.css';
import StoreProvider from './StoreProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Home | Web App',
  description:
    'Welcome to our web application - your one-stop destination for all your needs',
  keywords: ['web app', 'next.js', 'react', 'typescript'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  openGraph: {
    title: 'Home | Web App',
    description:
      'Welcome to our web application - your one-stop destination for all your needs',
    type: 'website',
    locale: 'en_US',
    siteName: 'Web App',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Web App',
    description:
      'Welcome to our web application - your one-stop destination for all your needs',
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
