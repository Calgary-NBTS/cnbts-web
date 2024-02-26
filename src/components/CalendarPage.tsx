import { getEvents } from '@/sanity/sanity-utils';
import Image from 'next/image';
import EventsCalendar from './EventsCalendar';

const  CalendarPage = async ({year,month,day}:{year?: Number; month?: Number; day?: Number;}) => {
    const events = await getEvents();
    const eventDays = events.map(event=>new Date(event.time).getTime());
    const first = new Date(Math.min(...eventDays));
    const last = new Date(Math.max(...eventDays));

    return <div className="my-6 mx-auto w-full">
        <EventsCalendar events={events} />
{/* 
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
        </div> */}
    </div>
}

export default CalendarPage;