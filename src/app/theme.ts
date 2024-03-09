'use client';
import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    components: {
        MuiUseMediaQuery: {
            defaultProps: {
                noSsr: true,
            },
        },
    },
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
          default: 'transparent',
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