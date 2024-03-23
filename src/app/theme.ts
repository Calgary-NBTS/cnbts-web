'use client';
import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { Theme } from '@mui/material';
import { purple, yellow} from '@mui/material/colors';

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
        MuiAppBar: {
          styleOverrides: {
            root: ({theme}: {theme:Theme;}) => ({
              color: theme.palette.primary.contrastText,
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 46%, ${theme.palette.primary.dark} 100%)`,
              
            })
          }
        }
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#4fc3f7',
            light: '#b3e5fc',
            dark: '#039be5',
            contrastText: 'black',
          },
          secondary: {
            main: '#EA80FC',
            contrastText: 'black',
          },
          background: {
            default: '#fff',
          },
        },
      },
      dark: {
        palette: {
          
          primary: {
            main: purple[800],
            light: purple[700],
            dark: purple[900],
            contrastText: '#ffffff',
          },
          secondary: {
            main: yellow[500],
            contrastText: 'black',
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