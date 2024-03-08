import CalendarPage from '@/components/CalendarPage'

import getAllEvents  from '@/sanity/queries/getAllEvents';
import getFirstEventTime from '@/sanity/queries/getFirstEventTime';
import getLastEventTime from '@/sanity/queries/getLastEventTime';


export type Params = {
    params: {
        year: string;
        month: string;
    }
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
    // const events = await getAllEvents();
    // const eventDays = events.map(event=>new Date(event.time).getTime());
    
    const firstPromise = getFirstEventTime();
    const lastPromise = getLastEventTime();

    const [firstData,lastData] = await Promise.all([firstPromise,lastPromise]);
    
    const first = new Date(firstData.time);
    const last = new Date(lastData.time);
    
    
     let months = [];

    const firstYear = first.getFullYear();
    const firstMonth = first.getMonth();
    const lastYear = last.getFullYear();
    const lastMonth = last.getMonth();

    for (let year = firstYear; year <= lastYear; year++) {
        for (let month = firstMonth; month < 12; month++) {
            if (year > lastYear) break;
            if (year === lastYear && month > lastMonth) break;
            months.push({year: String(year),month: String(month)});
        }
    }

    return months;
}

const Calendar = ({params}:Params) => {

    return (
        <CalendarPage 
            params={params}
        />
    );
}

export default Calendar;