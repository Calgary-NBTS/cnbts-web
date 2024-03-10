import CalendarPage from '@/components/CalendarPage'

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