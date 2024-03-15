'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';
import FormattedText from './FormattedText';
import { Event } from '@/sanity/types/queryTypes';

import EventPoster from './EventPoster';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {
    date: Date;
    event: Event | undefined;
}

const TileContent = ({date, event}: Props) => {

    const day = date.getDate();

    const TooltipContent = ({event}: {event: Event}) => {
        if (!event) return;
        return (
            <Box>
                <Typography className="text-xl">{event.name}</Typography>
                <p>From: {new Date(event.time).toLocaleTimeString('en-CA')} to {new Date(event.timeend).toLocaleTimeString('en-CA')}</p>
                <p>Location: {event.location || 'Unknown'}</p>
                <div><FormattedText value={event.content} /></div>
            </Box>
        )
    }

    const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip enterTouchDelay={200} {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#f5f5f9',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));

    return (
        <Box 
            className="react-calendar__tile__tileContent"
            sx={{position:'relative'}}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top:0,
                    left:0,
                    right:0
                }}
            >
                    <Typography variant='body1' component='h4'>
                        {day}
                    </Typography>
                </Box>
                <Box 
                    sx={{
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        paddingTop: {xxs: '1rem', xs: '1rem', sm: '1rem', md: '0'}
                    }}
                >
                    {event &&
                        <>
                            <HtmlTooltip title={<TooltipContent event={event} />}>
                                <Box 
                                    sx={{maxHeight:'60px', maxWidth: '60px', position: 'relative'}}
                                >
                                    <Image 
                                        src={event.image} 
                                        width={event.imageWidth}
                                        height={event.imageHeight}
                                        alt={event.name}
                                        sizes='(max-width: 1200px) 15vw, 10vw'
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>
                            </HtmlTooltip>
                            <Popover open={false}><EventPoster event={event} /></Popover>
                        </>
                    }
                </Box>
            </Box>
    )
}

export default TileContent;