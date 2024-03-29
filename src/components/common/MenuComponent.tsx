'use client'
import * as React from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export type MenuComponentProps = {
    title: string;
    href?: string;
    target?: string;
    submenu?: MenuComponentProps[];
}

function toId(str: string) {
    return str.replace(/\s/g, '');
}

const MenuComponent = ({title,href,target,submenu}: MenuComponentProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const id = toId(title);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const submenuItems = (
        <Menu
        id={id + '-menu'}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{
            'aria-labelledby': id + '-button',
            onMouseLeave: handleClose,
        }}
    >
        {submenu && Array.isArray(submenu) && submenu.map((item) => (
            <MenuItem 
                key={toId(item.title)}
                // component={Link}
                // href={item.href}
                onClick={handleClose}
                dense
            >
                {item.title}
            </MenuItem>
        ))}
    </Menu>
    )

    return (
        <>
        <Button
            
            id={id + '-button'}
            aria-controls={open ? id : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onMouseOver={submenu ? handleClick : undefined}
            sx={{color: 'primary.contrastText'}}
        >
            {title}
        </Button>
        {submenu && submenuItems}
        </>
    )
}

export default MenuComponent;