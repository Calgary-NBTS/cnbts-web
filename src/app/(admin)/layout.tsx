import type { Metadata } from 'next';
import { PHProvider } from '../../components/PostHog/PostHogProvider';
import dynamic from 'next/dynamic';

const PostHogPageView = dynamic(
  () => import('@/components/PostHog/PostHogPageView'),
  {
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: 'Admin Panel - Calgary Non-Binary and Transgender Society',
  description:
    'Calgary Non-Binary and Transgender Societies Administration Panel',
  metadataBase: new URL('https://www.calgarynbts.ca'),
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
    apple: [{ url: './apple-touch-icon.png' }],
  },
  manifest: 'https://www.calgarynbts.ca/manifest.json',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
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
      <PHProvider>
        <body>
          <PostHogPageView />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
