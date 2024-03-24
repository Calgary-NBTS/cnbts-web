'use client'
import React from 'react';
import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import useTheme from '@mui/material/styles/useTheme';
import { IoClose, IoMenu } from "react-icons/io5";
import navItem from '@/sanity/schemas/objects/navItem';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const drawerWidth=240;

const navItems = [
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
    },
    {
        title: 'Resources',
        link: '/resources',
    },
    {
        title: 'About',
        link: '/about',
    },
    {
        title: 'Admin',
        link: '/admin',
        target: '_blank',
    }
]

const Menubar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const theme = useTheme();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState => !prevState));
    }


    const drawer = (
        <Box 
            onClick={handleDrawerToggle} 
            sx={{
                minHeight: '100%',
                textAlign: 'center',
                color: theme.vars.palette.primary.contrastText,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
            }}>
            <Typography variant="h6" sx={{my:2}}>
                Calgary NBTS
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton component={Link} target={item.target ? item.target : '_self'} href={item.link} sx={{textAlign: 'center'}}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
                    <ListItem disablePadding sx={{justifyContent:'center'}}>
                        <DarkModeToggle />
                    </ListItem>
            </List>
        </Box>
    )
    // const container = window !== undefined ? () => window.document.body : undefined;

return (
    <>
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{
                // bgcolor: 'primary.main', 
                // color: 'primary.contrastText',
                // backgroundColor: '#DFDBE5',
                // backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\"), linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(233,233,233,1) 0%, rgba(137,213,246,1) 0%, rgba(79,195,247,1) 46%, rgba(83,164,200,1) 100%, rgba(215,215,215,1) 100%)",
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
                        // display: { xs: 'none', sm: 'block', md: 'block'},
                        typography: {xxs: 'subtitle2', xs: 'subtitle1', sm: 'h6', lg: 'h5', xl: 'h4'},
                        
                    }}
                >
                    Calgary Non-Binary and Transgender Society
                </Typography>
                <Box sx={{  display: { xxs: 'none', xs: 'none', sm: 'none', md: 'block'}}}>

                    { navItems.map((item) => (
                        <Button 
                            variant='text'
                            component={Link} 
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
    )
}

export default Menubar;
