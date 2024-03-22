
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, useColorScheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const DarkModeToggle = () => {
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    // const colorMode = React.useContext(ColorModeContext);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    if (!mounted) return null; 

    return (
        <Button
            variant='outlined'
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}

export default DarkModeToggle;