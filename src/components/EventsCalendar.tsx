"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { Event } from '@/sanity/types/queryTypes';
import Calendar, { OnArgs, TileArgs } from 'react-calendar';
import './css/Calendar.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import {styled} from '@mui/material/styles';

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
    const [value, onChange] = useState<Value>(new Date());
    const activeStartDate = new Date(activeYear,activeMonth,1);

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
            <Box className="react-calendar__tile__tileContent"
                sx={{position:'relative'}}>
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
                    {todays && todays[0] &&
                    <HtmlTooltip title={<TooltipContent eventId={todays[0]._id} />}>
                            <Box sx={{maxHeight:'60px', maxWidth: '60px', position: 'relative'}}>
                                <Image 
                                    src={todays[0].image} 
                                    width={todays[0].imageWidth}
                                    height={todays[0].imageHeight}
                                    alt={todays[0].name}
                                    sizes='(max-width: 1200px) 15vw, 10vw'
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </Box>
                        </HtmlTooltip>
                    }
                </Box>
            </Box>
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
        <Box>
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
    )
}