import type { Metadata } from 'next';
import '@/app/globals.css';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import getSiteSettings from '@/sanity/queries/getSiteSettings';
import Menubar from '@/components/Menubar';

let siteData;

async function getData() {
  siteData = await getSiteSettings();
  console.log(siteData);
}

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
      <body className="bg-fuchsia-200 min-h-full">
        <Menubar />
            {children}
      </body>
    </html>
  );
}
