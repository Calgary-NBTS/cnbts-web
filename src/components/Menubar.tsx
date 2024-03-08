'use client';
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
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
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
            </List>
        </Box>
    )
    // const container = window !== undefined ? () => window.document.body : undefined;

return (
    <>
        <AppBar component="nav" position="sticky">
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
                        typography: {xs: 'subtitle2', sm: 'h6', lg: 'h4', xl: 'h4'}
                    }}
                >
                    Calgary Non-Binary and Transgender Society
                </Typography>
                <Box sx={{display: { xs: 'none', sm: 'none', md: 'block'}}}>
                    {navItems.map((item) => (
                        <Button component={Link} href={item.link} key={item.title} target={item.target ? item.target : '_self'} sx={{ color: '#fff' }}>
                            {item.title}
                        </Button>
                    ))}
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
                sx={{display: { sm: 'block', md: 'none'},
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
