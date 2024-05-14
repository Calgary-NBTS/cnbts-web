import CalendarPage from '@/components/calendar/CalendarPage';

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