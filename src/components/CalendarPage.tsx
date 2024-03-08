import getAllEventsByMonth from '@/sanity/queries/getAllEventsByMonth';
import Image from 'next/image';
import EventsCalendar from './EventsCalendar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export type Params = {
    params: {
        index: string[] | undefined;
    }
}

export const revalidate = 3600;
const  CalendarPage = async ({params}:Params) => {
    //const  CalendarPage = async ({year,month,day}:{year?: Number; month?: Number; day?: Number;}) => {
    let currentDay = new Date();
    let activeMonth = currentDay.getMonth();
    let activeYear = currentDay.getFullYear();

    if (params) {
        const values = params?.index;
        
        if (values && values[0] && values[1]) {
            activeYear = Number(values[0]);
            activeMonth = Number(values[1]);
        }
    }
    else console.log('no params')
    
    const events = await getAllEventsByMonth({year: activeYear, month: activeMonth});

    return (
        <Box paddingY={2}>
            <Container>
                <EventsCalendar 
                    events={events} 
                    activeMonth={activeMonth} 
                    activeYear={activeYear} 
                />
            </Container>
        </Box>
    )
}

export default CalendarPage;