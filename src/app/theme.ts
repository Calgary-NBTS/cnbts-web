'use client';
import { Roboto } from 'next/font/google';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { purple, yellow, grey } from '@mui/material/colors';
import type {} from '@mui/material/themeCssVarsAugmentation';

const theme = extendTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.primary.contrastText,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.secondary.dark,
          [theme.getColorSchemeSelector('dark')]: {
            color: theme.vars.palette.secondary.main,
          },
        }),
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
          contrastText: 'black',
        },
        secondary: {
          main: '#EA80FC',
          dark: '#d406f9',
          contrastText: 'black',
        },
        background: {
          default: '#fff',
          paper: '#f3f3f3',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: purple[800],
          light: purple[700],
          dark: purple[900],
          contrastText: '#fff',
        },
        secondary: {
          main: yellow[500],
          contrastText: grey[900],
        },
        background: {
          default: grey[900],
          paper: grey[900],
        },
      },
    },
  },
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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
