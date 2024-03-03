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
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#FFCFFF',
        },
      },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;