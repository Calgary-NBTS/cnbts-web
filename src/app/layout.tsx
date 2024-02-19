import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="bg-fuchsia-200">
        <div className="flex flex-col">
          <Header />
          <div className="h-10">&nbsp;</div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
