'use client'
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useTheme from '@mui/material/styles/useTheme';
import { IoClose, IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { Newsletter } from '@/sanity/types/queryTypes';

import { styled } from '@mui/material/styles';

import MenuComponent, {MenuComponentProps} from './MenuComponent';

const drawerWidth=240;

type NavItem = {
    title: string;
    link: string;
    menu?: string;
    target?: string;
}


const navItems: NavItem[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Calendar',
        link: '/calendar',
    },
    {
        title: 'News',
        link: '/newsletter',
        menu: 'eventPopper',
    },
    {
        title: 'Resources',
        link: '/resources',
    },
    {
        title: 'About',
        link: '/about',
    },
    // {
    //     title: 'Admin',
    //     link: '/admin',
    //     target: '_blank',
    // }
]

const DrawerStyle = styled('div')(({ theme }) => ({
    minHeight: '100%',
    textAlign: 'center',
    color: theme.vars.palette.primary.contrastText,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
    [theme.getColorSchemeSelector('dark')]: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
    }
}));

type Props = {
    newsletters: Newsletter[];
}

const Menubar = ({newsletters}:Props) => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState => !prevState));
    }

    const newsComponents = newsletters?.map((newsletter) => {
        return {
            title: newsletter.title,
            href: '/newsletter/' + newsletter.slug,
            target: '_self',
        }
    })
    

    const drawer = (
        <DrawerStyle onClick={handleDrawerToggle}>
            <Typography variant="h6" sx={{my:2}}>
                Calgary NBTS
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                            <ListItemText primary={item.title} />
                    </ListItem>
                ))}
                    <ListItem disablePadding sx={{justifyContent:'center'}}>
                        <DarkModeToggle />
                    </ListItem>
            </List>
        </DrawerStyle>
    );

return (
    <>
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{
                // bgcolor: 'primary.main', 
                // color: 'primary.contrastText',
                // backgroundColor: '#DFDBE5',
                color: theme.vars.palette.primary.contrastText,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
  
            }}
            // suppressHydrationWarning 
        >
            <Toolbar>
                <IconButton 
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{mr: 2, display: {md: 'none'}}}
                >
                    <IoMenu />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        // color: 'primary.contrastText',
                        // display: { xs: 'none', sm: 'block', md: 'block'},
                        typography: {xxs: 'subtitle2', xs: 'subtitle2', sm: 'subtitle1', lg: 'h5', xl: 'h4'},
                        
                    }}
                >
                    Calgary Non-Binary and Transgender Society
                </Typography>
                <Box sx={{  display: { xxs: 'none', xs: 'none', sm: 'none', md: 'block'}}}>
                    { navItems.map((item) => (
                        <Button 
                            // onMouseOver={item.popper ? handleClick : undefined}
                            // onMouseLeave={item.popper ? handleClose : undefined}
                            // aria-describedby={id}
                            variant='text'
                            LinkComponent={Link} 
                            href={item.link} 
                            key={item.title}
                            target={item.target ? item.target : '_self'} 
                            sx={{ 
                                color: 'primary.contrastText',
                                
                            }}
                        >
                            {item.title}
                        </Button>
                    ))}
                        <MenuComponent title='Events' submenu={newsComponents} />
                        <DarkModeToggle />
                </Box>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
                // container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, //better open performance on mobile
                }}
                sx={{
                    display: { sm: 'block', md: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
            }}
            >
                {drawer}
            </Drawer>
        </nav>
    </>
    );
}

export default Menubar;
