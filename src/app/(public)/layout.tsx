import type { Metadata } from 'next';
import '@/app/globals.css';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic'
import { Suspense } from 'react';

const Header = dynamic(() => import('@/components/Header'), {ssr: false})

export const metadata: Metadata = {
  title: "Calgary Non-Binary and Transgender Society",
  description: "Calgary Non-Binary and Transgender Societies official homepage",
  metadataBase: new URL('https://calgarynbts.ca'),
  icons: {
    icon: [
      {
      url: '/favicon-32x32.png',
      sizes: '32x32'
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16'
      }, 
    ],
    apple: [
      { url: './apple-touch-icon.png' },
    ],
  },
  manifest: 'https://calgarynbts.ca/manifest.json',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-fuchsia-200 min-h-full flex flex-col">
            <Header />
          <div className="header-height h-12">&nbsp;</div>
          <main className="w-full h-full text-black">
            {children}
          </main>
          <Suspense>
            <Footer />
          </Suspense>
      </body>
    </html>
  );
}
