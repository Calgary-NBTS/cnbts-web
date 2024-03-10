"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { renderToStaticMarkup } from 'react-dom/server';
import { useState } from 'react';
import { Event } from '@/sanity/types/queryTypes';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
// import { Tooltip } from 'react-tooltip'
import Calendar, { OnArgs, TileArgs } from 'react-calendar';
import './css/Calendar.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import {styled} from '@mui/material/styles';
import CalendarBackground from './CalendarBackground';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type Props = {
    events: Event[];
    activeMonth: number;
    activeYear: number;
    first: Date;
    last: Date;
}

export default function EventsCalendar({events, activeMonth, activeYear, first, last}:Props) {
    const router = useRouter();
    // const [activeStartDate, onActiveStartDate] = useState<Date>(new Date());
    const [activeStartDate, onActiveStartDate] = useState<Date>(new Date(activeYear,activeMonth,1));
    const [value, onChange] = useState<Value>(new Date());

    const months=['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const TooltipContent = ({eventId}: {eventId: string}) => {
        const current = events.filter(event=>event._id===eventId);
        if (!current || !current[0]) return;
        return (
            <div>
                <h3 className="text-xl">{current[0].name}</h3>
                <p>From: {new Date(current[0].time).toLocaleTimeString('en-CA')} to {new Date(current[0].timeend).toLocaleTimeString('en-CA')}</p>
                <p>Location: {current[0].location || 'Unknown'}</p>
                <div><PortableText value={current[0].content} /></div>
            </div>
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
    
    const tileContent = ({date, view}: TileArgs) => {
        if(view !=='month') return;

        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const todays = events.filter((event) => {
            const day = new Date(event.time)
            return date.getTime() == new Date (day.getFullYear(), day.getMonth(), day.getDate()).getTime()
        })

        return (
            <>
            
            <Box 
                className="react-calendar__tile__tileContent"
                sx={{
                    position: 'relative',
                }}
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
                <Box sx={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {todays && todays[0] &&
                    <HtmlTooltip title={<TooltipContent eventId={todays[0]._id} />}>
                        <Image 
                            data-tooltip-id="event_id"
                            data-tooltip-html={renderToStaticMarkup(<TooltipContent eventId={todays[0]._id} />)}
                            src={todays[0].image} 
                            width={todays[0].imageWidth}
                            height={todays[0].imageHeight}
                            alt={todays[0].name}
                            sizes='(max-width: 1200px) 15vw, 10vw'
                            style={{
                                maxHeight: 60,
                                width: 'auto',
                            }}
                        />
                        </HtmlTooltip>
                    }
                </Box>
            </Box>
            </>
        );
    }
    
    const formatMonthYear = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return `${months[month]} ${year}`
    }

    const handleActiveStartDateChanged = ({ action, activeStartDate, value, view }: OnArgs) => {
        if (!activeStartDate) return;
        switch (action) {
            case 'prev':
            case 'prev2':
            case 'next':
            case 'next2':
            case 'drillUp':
            case 'drillDown':
            case 'onChange':
                if (activeStartDate <= last && activeStartDate >= new Date(first.getFullYear(), first.getMonth())) { 
                    router.push(`/calendar/${activeStartDate.getFullYear()}/${activeStartDate.getMonth()}`)
                //     onActiveStartDate(activeStartDate);
                }
                break;
            default:
                throw new Error('bad action');
        }
    }

    return (
        <>
        <Box sx={{
            // position: 'relative',
            // backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%23000000' fill-opacity='0.2' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E\")"
        }}>
        {/* <CalendarBackground /> */}
        {/* <Tooltip id="event_id" /> */}
        <Calendar 
            calendarType='gregory' 
            defaultView='month'
            minDetail='year'
            activeStartDate={activeStartDate}
            showNeighboringMonth={false}
            onChange={onChange} 
            value={value} 
            tileContent={tileContent} 
            formatDay={(locale,date) => ''}
            formatMonthYear={(locale,date) => formatMonthYear(date)}
            onActiveStartDateChange={handleActiveStartDateChanged}
        />
        </Box>
        </>
    )
}