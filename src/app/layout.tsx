import './globals.css';

import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
// import { Toaster } from 'react-hot-toast';
import { Inter as FontSans } from 'next/font/google';
import AppProviders from '@/modules/app/AppProviders';
import BaseNavbar from '@/components/base/layout/BaseNavbar';
import BaseFooter from '@/components/base/layout/BaseFooter';
import { Toaster } from '@/components/ui/sonner';

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
          'min-h-screen bg-background font-sans antialiased text-sm sm:text-base relative',
          fontSans.variable
        )}
      >
        <AppProviders>
          <BaseNavbar />
          <main> {children}</main>

          <Toaster position="bottom-center" expand={false} richColors />

          {/* <BaseNavFooter /> */}
          {/* <BaseFooter /> */}
        </AppProviders>
      </body>
    </html>
  );
}
