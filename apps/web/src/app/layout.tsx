import type { Metadata } from 'next';
import './globals.css';
import '@repo/ui/styles.css';

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
