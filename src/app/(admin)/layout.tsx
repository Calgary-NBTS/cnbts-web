import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin Panel - Calgary Non-Binary and Transgender Society",
  description: "Calgary Non-Binary and Transgender Societies Administration Panel",
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
  }
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
