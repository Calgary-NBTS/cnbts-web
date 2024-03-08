import CalendarPage from '@/components/CalendarPage'

import getAllEvents  from '@/sanity/queries/getAllEvents';
import getFirstEventTime from '@/sanity/queries/getFirstEventTime';
import getLastEventTime from '@/sanity/queries/getLastEventTime';


export type Params = {
    params: {
        index: string[] | undefined;
    }
}

const Calendar = ({params}:Params) => {

    return (
        <CalendarPage />
    );
}

export default Calendar;