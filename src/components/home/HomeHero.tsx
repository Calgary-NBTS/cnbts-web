'use client';
import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { styled, useColorScheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
// import EnbyDragon from "@/../public/images/logos/EnbyDragonMatched.png";
// import TransDragon from "@/../public/images/logos/TransDragon.png";
import YYCNBTSLogo from '@/../public/images/logos/YYCNBTS.png';

type HeroProps = {
  heading: string;
  tagline: string;
  alt: string;
};

const HeroWrap = styled('section')(({ theme }) => ({
  backgroundColor: '#BA68C8',
  [theme.getColorSchemeSelector('dark')]: {
    backgroundColor: purple[900],
  },
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='348' height='290' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.09'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E")`,
  boxShadow: '2px 2px 10px 1px rgba(0,0,0,0.5)',
  padding: 1,
}));

const HomeHero = ({ heading, tagline, alt }: HeroProps) => {
  const { mode, systemMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  const calculatedMode = mode === 'system' ? systemMode : mode;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <HeroWrap>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flex: '1 1 0px',
        }}
      >
        <Box sx={{ flexGrow: 1, width: 0, height: '100%' }}>
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                typography: {
                  xs: 'h4',
                  sm: 'h3',
                  md: 'h2',
                  lg: 'h1',
                },
                textShadow: '2px 2px 2px #ffcccc',
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h2"
              component="h3"
              sx={{
                typography: {
                  xxs: 'subtitle1',
                  xs: 'subtitle1',
                  sm: 'h6',
                  md: 'h5',
                },
              }}
            >
              {tagline}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, width: 0 }}>
          {/* <Image
                        src={mounted ? ((calculatedMode === 'light') ? TransDragon : EnbyDragon) : TransDragon}
                        alt={alt}
                        priority
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        sizes='(max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw'
                    /> */}
          <Image
            src={YYCNBTSLogo}
            alt={
              'Blue/black outer ring with pink/violet second ring with white  then pink and yellow circles. Grey mountains with the Calgary skyline in the foreground.'
            }
            priority
            style={{
              width: '100%',
              height: 'auto',
              marginTop: '1em',
              marginBottom: '1em',
            }}
            sizes="(max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
        </Box>
      </Container>
    </HeroWrap>
  );
};

export default HomeHero;
