'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export type MenuItemProps = {
    title: string;
    url: string;
    target?: string;
    id?: string;
    submenuItems?: MenuItemProps[];
}

const HeaderMenuItem = () => {
    return (
        <Box>
            <Button>

            </Button>
        </Box>
    )
}

export default HeaderMenuItem;