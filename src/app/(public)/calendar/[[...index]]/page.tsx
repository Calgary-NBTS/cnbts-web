import CalendarPage from '@/components/CalendarPage'

export type Params = {
    params: {
        index: string[] | string | undefined;
    }
}

const Calendar = ({params}:Params) => {

    return (
        <CalendarPage 
            params={params}
        />
    );
}

export default Calendar;