
import { useContext, createContext } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const DarkModeToggle = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box></Box>
    )
}

export default DarkModeToggle;