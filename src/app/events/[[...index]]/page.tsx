//import { getEvents } from '@/sanity/sanity-utils' 
import {getEvents} from '../../../sanity/sanity-utils' // docker loses the @
import Image from 'next/image';
import EventsCalendar from '../../../components/EventsCalendar';
import { useState } from 'react';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece,ValuePiece];


export default async function Events() {
    const events = await getEvents();

    return <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-extrabold m-8">Our Upcoming Events!</h1>

        <div>
            <EventsCalendar />
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
                <div key={event._id} className="border border-purple-500 rounded-lg p-3">
                    {event.image && (
                        <Image
                            src={event.image}
                            alt={event.name}
                            width={250}
                            height={250}
                            className="object-cover"
                        />
                    )}
                    <div className="font-extrabold">
                        {new Intl.DateTimeFormat("en-US",{month:'long',day:'numeric'}).format(new Date(event.time))}
                    </div>
                </div>
            ))}
        </div>
    </div>
}