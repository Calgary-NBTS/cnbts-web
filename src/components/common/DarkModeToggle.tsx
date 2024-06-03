'use client';
import * as React from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { /* useTheme, */ useColorScheme } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';

import Image from 'next/image';
import NBFlag from '@/../public/images/pride/flags/NonbinaryFlag.svg';
import TransFlag from '@/../public/images/pride/flags/TransgenderFlag.svg';

const DarkModeToggle = () => {
  const { mode, setMode, systemMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  const calculatedMode = mode === 'system' ? systemMode : mode;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // for server-side rendering
  // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  if (!mounted) {
    return (
      <IconButton disableRipple disabled>
        <Skeleton
          variant="rectangular"
          width={25}
          height={15}
          sx={{ display: 'inline-block' }}
        />
      </IconButton>
    );
  }

  const flag = (
    <Image
      src={mode === 'light' ? NBFlag : TransFlag}
      width={800}
      height={480}
      alt={
        calculatedMode === 'light'
          ? 'Non-Binary flag as toggle to dark mode'
          : 'Transgender flag as toggle to light mode'
      }
      style={{
        height: '15px',
        width: '25px',
      }}
    />
  );

  return (
    <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
      <IconButton
        disableRipple
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
      >
        {flag}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
