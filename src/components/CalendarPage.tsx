import { getEvents } from '@/sanity/queries';
import Image from 'next/image';
import EventsCalendar from './EventsCalendar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export type Params = {
    params: {
        index: string[] | string | undefined;
    }
}

export const revalidate = 3600;
const  CalendarPage = async ({params}:Params) => {
    //const  CalendarPage = async ({year,month,day}:{year?: Number; month?: Number; day?: Number;}) => {
    const events = await getEvents();
    const eventDays = events.map(event=>new Date(event.time).getTime());
    const first = new Date(Math.min(...eventDays));
    const last = new Date(Math.max(...eventDays));



    return (
        <Box padding={2}>
            <Container>
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
            </Container>
        </Box>
    )
}

export default CalendarPage;