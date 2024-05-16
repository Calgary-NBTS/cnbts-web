import { GoogleAnalytics } from '@next/third-parties/google'
import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getSiteSettings from "@/sanity/queries/getSiteSettings";
import BackgroundImage from "@/components/common/BackgroundGradiant";
// import Header from '@/components/common/Header';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import theme from "../theme";

export const revalidate = 3600;
export async function generateMetadata(): Promise<Metadata> {
  // read rout params
  // const id = params.id;
  const siteSettings = await getSiteSettings();

  return {
    title: siteSettings.title,
    description: siteSettings.description,
    metadataBase: new URL("https://www.calgarynbts.ca"),
    icons: {
      icon: [
        {
          url: "/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          url: "/favicon-16x16.png",
          sizes: "16x16",
        },
      ],
      apple: [{ url: "./apple-touch-icon.png" }],
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
      <body style={{ position: "relative", minHeight: "100vh" }}>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme}>
            <CssBaseline />
            <BackgroundImage />
            <Suspense>
              <Header />
            </Suspense>
            {/* <div className="header-height">&nbsp;</div> */}
            <main>{children}</main>
            <GoogleAnalytics gaId='G-3FC7P80G8W'/>
            <Suspense>
              <Footer />
            </Suspense>
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
