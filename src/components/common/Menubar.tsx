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
import Collapse from '@mui/material/Collapse';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useTheme from '@mui/material/styles/useTheme';
import { IoClose, IoMenu } from 'react-icons/io5';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

import { styled } from '@mui/material/styles';
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import MenuComponent, {MenuComponentProps} from './MenuComponent';

const drawerWidth=240;

const DrawerStyle = styled('div')(({ theme }) => ({
    minHeight: '100%',
    textAlign: 'center',
    color: theme.vars.palette.primary.contrastText,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
    [theme.getColorSchemeSelector('dark')]: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
    }
}));
type DrawerMenuItemProps = {
    item: MenuComponentProps;
    drawerToggle: Function;
    leftPadding?: number
}

const DrawerMenuItem = ({item, drawerToggle, leftPadding}: DrawerMenuItemProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(last => !last);
    }

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton
                    LinkComponent={Link}
                    href={item?.href ? item.href : ''}
                    onClick={item?.href ? () => drawerToggle() : handleClick}
                    sx={{pl: leftPadding ?? 1}}
                >
                    <ListItemText primary={item?.title ? item.title : ''} />
                    {item?.submenu && (open ? <MdExpandLess /> : <MdExpandMore />)}
                </ListItemButton>
            </ListItem>
            {item?.submenu && 
                <Collapse in={open} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        {item.submenu.map((subItem,i) => (<React.Fragment key={subItem.title+'subItem'}><DrawerMenuItem drawerToggle={drawerToggle}  item={subItem} leftPadding={4}/>{!Boolean(i) && <Divider />}</React.Fragment>))}
                    </List>
                </Collapse>
            }
        </>
    )
}

type Props = {
    menu: MenuComponentProps[];
}

const Menubar = ({menu}:Props) => {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState => !prevState));
    }

    const drawer = (
        <DrawerStyle>
            <Typography variant="h6" sx={{my:2}}>
                Calgary NBTS
            </Typography>
            <Divider />
            <List>
                {menu.map((item) => (
                    <DrawerMenuItem drawerToggle={handleDrawerToggle} key={item.title+'list'} item={item} />
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
                    { menu.map((item) => (
                        <MenuComponent 
                            key={item.title} 
                            title={item.title} 
                            href={item.href} 
                            target={item.target}
                            submenu={item.submenu} 
                        />
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
    );
}

export default Menubar;
