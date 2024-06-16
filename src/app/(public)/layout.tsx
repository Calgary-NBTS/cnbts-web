import { Suspense } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, ResolvingMetadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getSiteSettings from '@/sanity/queries/getSiteSettings';
import BackgroundImage from '@/components/common/BackgroundGradiant';
// import Header from '@/components/common/Header';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import theme from '../theme';
import { PHProvider } from '../providers';
import dynamic from 'next/dynamic';

const PostHogPageView = dynamic(() => import('@/app/PostHogPageView'), {
  ssr: false,
});

export const revalidate = 3600;
export async function generateMetadata(): Promise<Metadata> {
  // read rout params
  // const id = params.id;
  const siteSettings = await getSiteSettings();

  return {
    title: siteSettings.title,
    description: siteSettings.description,
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
    // manifest: 'https://www.calgarynbts.ca/manifest.json',
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        // noimageindex: false,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body style={{ position: 'relative', minHeight: '100vh' }}>
          <AppRouterCacheProvider>
            <CssVarsProvider theme={theme}>
              <CssBaseline />
              <BackgroundImage />
              <Suspense>
                <Header />
              </Suspense>
              {/* <div className="header-height">&nbsp;</div> */}
              <main>
                <PostHogPageView />
                {children}
              </main>
              <SpeedInsights />
              <Suspense>
                <Footer />
              </Suspense>
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </body>
      </PHProvider>
    </html>
  );
}
