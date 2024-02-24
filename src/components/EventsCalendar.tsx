"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Event } from '@/sanity/types/queryTypes';
import Image from 'next/image';

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
            <div className="h-28 flex flex-col bg-white/85 rounded-2xl">
                <div className="w-10/12 m-auto h-ninty-percent">
                    {day}
                </div>
                <div>
                    {todays && todays[0] &&
                        <Image 
                            className="rounded-lg m-auto my-2"
                            src={todays[0].image} 
                            width={70}
                            height={80}
                            alt={todays[0].name}
                        />
                    }
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