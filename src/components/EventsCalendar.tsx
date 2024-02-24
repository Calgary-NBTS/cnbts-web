"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Event } from '@/sanity/types/queryTypes';

import { FaDiscord } from "react-icons/fa6";

import Calendar, { TileArgs } from 'react-calendar';
import './css/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type EventsCalType = {
    events?: Event[];
}

export default function EventsCalendar({events}:EventsCalType) {

    const [value, onChange] = useState<Value>(new Date());

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
    const months=['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const formatMonthYear = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return `${months[month]} ${year}`
    }

    return (
            <Calendar 
                calendarType='gregory' 
                defaultView='month'
                showNeighboringMonth={false}
                onChange={onChange} 
                value={value} 
                tileContent={tileContent} 
                formatDay={(locale,date) => ''}
                formatMonthYear={(locale,date) => formatMonthYear(date)}
            />
    )
}