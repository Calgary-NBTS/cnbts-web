"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Event } from '@/sanity/types/queryTypes';

import { FaDiscord } from "react-icons/fa6";

import Calendar, { OnArgs, TileArgs } from 'react-calendar';
import './css/Calendar.css';
import { act } from 'react-dom/test-utils';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventsCalendar({events}:{events: Event[]}) {
    const [activeStartDate, onActiveStartDate] = useState<Date>(new Date());
    const [value, onChange] = useState<Value>(new Date());

    const months=['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const eventDays = events.map(event=>new Date(event.time).getTime());
    const first = new Date(Math.min(...eventDays));
    const last = new Date(Math.max(...eventDays));
    
    
    // console.log(first,last);


    const tileContent = ({date, view}: TileArgs) => {
        if(view !=='month') return;
        const dateString = date.getDay();
        const day = date.getDate();
        
        return (
            <div className="h-28">
                <div className="w-10/12 bg-white m-auto h-ninty-percent">
                    {day}
                </div>
            </div>
        );
    }
    
    const formatMonthYear = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return `${months[month]} ${year}`
    }

    const handleActiveStartDateChanged = ({ action, activeStartDate, value, view }: OnArgs) => {
        // console.log(action, activeStartDate,value,view)
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
    )
}