import './globals.css';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import AppProviders from '@/modules/app/AppProviders';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    template: `%s | Sillyfrog`,
    default: 'Sillyfrog',
  },
  description: 'A ribbity hop to adventure!',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased text-sm sm:text-base',
          fontSans.variable
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
