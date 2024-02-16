"use client";
import Link from 'next/link';
import Calendar from 'react-calendar';
import { useState } from 'react';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventsCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="flex w-full bg-purple-200 text-black">
            <Calendar  onChange={onChange} value={value}/>
        </div>
    )
}