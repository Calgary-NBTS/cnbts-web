import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

import theme from '@/app/theme'; 

const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    
    return (
        <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    )
}

export default ThemeProvider;