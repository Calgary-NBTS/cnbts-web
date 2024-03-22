'use client';
import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = extendTheme({
    components: {
        MuiUseMediaQuery: {
            defaultProps: {
                noSsr: true,
            },
        },
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#4fc3f7',
            light: '#b3e5fc',
            dark: '#039be5',
            contrastText: '#000000',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#fff',
          },
        },
      },
      dark: {
        palette: {
          
          primary: {
            main: '#000000',
            light: '#b3e5fc',
            dark: '#039be5',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#000',
          },
        },
      },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    breakpoints: {
      values: {
        xxs: 0,
        xs: 400,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    }
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxs: true;
  }
}

export default theme;