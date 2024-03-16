"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Event } from '@/sanity/types/queryTypes';
import Calendar, { OnArgs, TileArgs } from 'react-calendar';
import './css/Calendar.css';

import Box from '@mui/material/Box';
import TileContent from './TileContent';

import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

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

    const tileContent = ({date, view}: TileArgs) => {
        if(view !=='month') return;

        const todays = events.filter((event) => {
            const day = new Date(event.time)
            return date.getTime() == new Date (day.getFullYear(), day.getMonth(), day.getDate()).getTime()
        })

        return (
            <TileContent date={date} event={todays[0]} /> // TODO: What if there's more than one event in the day? This should be a swiper card then
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
                nextLabel={<GrFormNextLink />}
                next2Label={null}
                prevLabel={<GrFormPreviousLink />}
                prev2Label={null}
            />
        </Box>
    )
}