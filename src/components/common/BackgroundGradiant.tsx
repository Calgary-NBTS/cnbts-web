'use client';

import useTheme from '@mui/material/styles/useTheme';

const BackgroundImage = () => {
  const theme = useTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{
        zIndex: -1,
        objectFit: 'fill',
        position: 'absolute',
      }}
    >
      <rect fill="#ffffff" width="24" height="24" />
      <defs>
        <linearGradient
          id="a"
          x1="0"
          x2="0"
          y1="0"
          y2="1"
          gradientTransform="rotate(129,0.5,0.5)"
        >
          <stop offset="0" stopColor={theme.vars.palette.primary.main} />
          <stop offset="1" stopColor={theme.vars.palette.secondary.main} />
        </linearGradient>
      </defs>
      <pattern id="b" width="20" height="20" patternUnits="userSpaceOnUse">
        {/* <circle  fill='#ffffff' cx='10' cy='10' r='10'/> */}
        <path
          cx="20"
          cy="20"
          d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z"
        />
      </pattern>
      <rect width="100%" height="100%" fill="url(#a)" />
      <rect width="100%" height="100%" fill="url(#b)" fillOpacity="0.03" />
    </svg>
  );
};

export default BackgroundImage;
