'use client';
import React from 'react';
import { useContext, useState } from 'react';
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Switch} from '@mui/material';
import {useTheme} from '@mui/material/styles';
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
                        <ListItemButton component={Link} href={item.link} sx={{textAlign: 'center'}}>
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
                    sx={{flexGrow: 1, display: { xs: 'none', sm: 'block', md: 'block'}}}
                >
                    Calgary Non-Binary &amp; Transgender Society
                </Typography>
                <Box sx={{display: { xs: 'none', sm: 'none', md: 'block'}}}>
                    {navItems.map((item) => (
                        <Button component={Link} href={item.link} key={item.title} sx={{ color: '#fff' }}>
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
