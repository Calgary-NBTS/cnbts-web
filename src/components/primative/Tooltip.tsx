'use client';
import MaterialTooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';

type TTProps = {
    children?: ReactNode;
}

const Tooltip = ({children}:TTProps) => {
    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    }

    const handleTooletipOpen = () => {
        setOpen(true);
    }

    return (
        <Box>{children}</Box>
    )
}

export default Tooltip;