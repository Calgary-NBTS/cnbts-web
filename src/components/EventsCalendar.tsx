"use client";
import Link from 'next/link';
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

import {styled} from '@mui/material/styles';
import CalendarBackground from './CalendarBackground';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventsCalendar({events}:{events: Event[]}) {
    const [activeStartDate, onActiveStartDate] = useState<Date>(new Date());
    const [value, onChange] = useState<Value>(new Date());
    

    const months=['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const eventDays = events.map(event=>new Date(event.time).getTime());
    const first = new Date(Math.min(...eventDays));
    const last = new Date(Math.max(...eventDays));

    const TooltipContent = ({eventId}: {eventId: string}) => {
        const current = events.filter(event=>event._id===eventId);
        if (!current || !current[0]) return;
        return (
            <div>
                <h3 className="text-xl">{current[0].name}</h3>
                <p>From: {new Date(current[0].time).toLocaleTimeString()} to {new Date(current[0].timeend).toLocaleTimeString()}</p>
                <p>Location: {current[0].location || 'Unknown'}</p>
                <p><PortableText value={current[0].content} /></p>
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
            
            <div className="react-calendar__tile__tileContent">
                <div className="mx-auto my-1">
                    {day}
                </div>
                <div>
                    {todays && todays[0] &&
                    <HtmlTooltip title={<TooltipContent eventId={todays[0]._id} />}>
                        <Image 
                            data-tooltip-id="event_id"
                            data-tooltip-html={renderToStaticMarkup(<TooltipContent eventId={todays[0]._id} />)}
                            src={todays[0].image} 
                            width={70}
                            height={80}
                            alt={todays[0].name}
                        />
                        </HtmlTooltip>
                    }
                </div>
            </div>
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
                if (activeStartDate <= last && activeStartDate >= new Date(first.getFullYear(), first.getMonth())) onActiveStartDate(activeStartDate);
                break;
            default:
                throw new Error('bad action');
        }
    }

    return (
        <>
        <div style={{position: 'relative'}}>
        <CalendarBackground />
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
        </div>
        </>
    )
}