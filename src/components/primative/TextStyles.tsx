'use client'
import {styled} from '@mui/material/styles';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import MaterialLink, {LinkProps, linkClasses} from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const BlockQuote = styled('blockquote')(({ theme }) => ({
    background: `rgb(${theme.vars.palette.primary.contrastText} / 0.2)`,
    borderLeft: '10px solid #ccc',
    margin: '1.5em 10px',
    padding: '0.5em 10px',
    quotes: '"',
    '&::before': {
        color: '#ccc',
        content: 'open-quote',
        fontSize: '4em',
        
    }
}))

export const StyledLink = styled(({ className, ...props}: LinkProps) => {
    const rel = !props.href?.startsWith('/') ? 'noreferer noopener' : undefined;

    if (rel) // external link
        return (
            <MaterialLink component='a' href={props.href} {...props} rel={rel} target='_blank'>
                {props.children}<Typography component='span' sx={{fontSize:'x-small'}}> <FaExternalLinkAlt/></Typography>
            </MaterialLink>
        )
    else
        return <MaterialLink component={Link} href={props.href} {...props}>{props.children}</MaterialLink>
    })(({ theme }) => ({

}))