import type { Metadata } from 'next';
import './globals.css';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic'

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className="bg-fuchsia-200 h-screen">
        <div className="flex flex-col h-full">
          <Header />
          <div className="h-10">&nbsp;</div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
