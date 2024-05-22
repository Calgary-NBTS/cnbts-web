'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Newsletter as NewsletterType } from '@/sanity/types/queryTypes';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Global } from '@emotion/react';

const drawerBleeding = 25;

const PullerInner = styled('div')(({ theme }) => ({
  width: 6,
  height: 30,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  top: 'calc(50% - 15px)',
}));

const PullerOuter = styled('div')(({ theme }) => ({
  padding: 5,
  backgroundColor: theme.palette.mode === 'light' ? grey[600] : grey[900],
  borderRadius: 7,
  position: 'absolute',
  right: 5,
  top: 'calc(50% - 15px)',
}));

type Props = {
  newsletters: NewsletterType[];
};

const NewsletterList = ({ newsletters }: Props) => {
  const [open, setOpen] = useState(false);

  const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: open
      ? theme.palette.mode === 'light'
        ? '#fff'
        : grey[800]
      : 'transparent',
  }));

  const FullPuller = () => (
    <PullerOuter onClick={handleDrawerToggle(true)}>
      <PullerInner />
    </PullerOuter>
  );

  const handleDrawerToggle = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const nlList = (
    <List>
      {newsletters.map((nl) => (
        <ListItem key={nl.title}>
          <ListItemButton component={Link} href={`/newsletter/${nl.slug}`}>
            <ListItemText primary={nl.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const theme = useTheme();
  const useLg = useMediaQuery(theme.breakpoints.up('lg'));

  const mobile = (
    <Box>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            width: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <nav>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={handleDrawerToggle(false)}
          onOpen={handleDrawerToggle(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              right: -drawerBleeding,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              visibility: 'visible',
              top: 0,
              bottom: 0,
            }}
          >
            <FullPuller />
            {nlList}
          </StyledBox>
        </SwipeableDrawer>
      </nav>
    </Box>
  );

  const big = <Box>{nlList}</Box>;

  return useLg ? big : mobile;
};

export default NewsletterList;
