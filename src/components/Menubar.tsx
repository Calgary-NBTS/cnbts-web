'use client'
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const Menubar = () => {
    const [isOpen, setIsOpen] = useState(false);
return (
    <Menu open={isOpen}>

    </Menu>
)
}

export default Menubar;
