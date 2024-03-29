'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Newsletter as NewsletterType } from "@/sanity/types/queryTypes"
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material/styles';


type Props = {
    newsletters: NewsletterType[];
}

const NewsletterList = ({newsletters}:Props) => {
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const useLg = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <List sx={{display:{xxs: 'none', xs: 'none', md: 'none', lg: 'block'}}}>
        {newsletters.map((nl) => (
            <ListItem key={nl.title}>
                <ListItemButton component={Link} href={`/newsletter/${nl.slug}`}>
                    <ListItemText primary={nl.title} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
    );

}

export default NewsletterList;