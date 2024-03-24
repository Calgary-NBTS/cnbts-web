import { Suspense } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getSiteSettings from '@/sanity/queries/getSiteSettings';
import BackgroundImage from '@/components/BackgroundGradiant';
import Menubar from '@/components/Menubar';
import Footer from '@/components/Footer';
import theme from '../theme'; 

export const revalidate = 3600;
export async function generateMetadata(): Promise<Metadata> {
    // read rout params
    // const id = params.id;
    const siteSettings = await getSiteSettings();
  
    return {
      title: siteSettings.title,
      description: siteSettings.description,
      metadataBase: new URL('https://beta.calgarynbts.ca'),
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
      // manifest: 'https://beta.calgarynbts.ca/manifest.json',
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
      <body style={{position: 'relative', minHeight:'100vh'}}>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme}>
            <CssBaseline />
            <BackgroundImage />
            <Menubar />
            {/* <div className="header-height">&nbsp;</div> */}
            <main>
              {children}
            </main>
            <Suspense>
              <Footer />
            </Suspense>
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
