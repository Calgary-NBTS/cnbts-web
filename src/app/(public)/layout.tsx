
import type { Metadata, ResolvingMetadata } from 'next';
// import '@/app/globals.css';
import Footer from '@/components/Footer';
// import dynamic from 'next/dynamic'
import { Suspense } from 'react';
import Header from '@/components/HeaderNew'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import getSiteSettings from '@/sanity/queries/getSiteSettings';
export const revalidate = 3600; // revalidate at most every hour

type metadataProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({params, searchParams}: metadataProps, parent: ResolvingMetadata): Promise<Metadata> {
    // read rout params
    // const id = params.id;
    const siteSettings = await getSiteSettings();
  
    return {
      title: siteSettings.title,
      description: siteSettings.description,
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
    }
  }
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {/* <div className="header-height">&nbsp;</div> */}
            <main className="w-full h-full text-black">
              {children}
            </main>
            <Suspense>
              <Footer />
            </Suspense>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
