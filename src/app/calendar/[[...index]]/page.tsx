import CalendarPage from '@/components/CalendarPage'

const Calendar = ({params}:{params: {index: string[]}}) => {
    const currDate = new Date();
    let date;
    if (params.index) {
        date = {
            year: Number(params.index[0] ? params.index[0] : currDate.getFullYear()),
            month: Number(params?.index[1] ? params?.index[1] : currDate.getMonth()),
            day: Number(params?.index[2] ? params?.index[2] : currDate.getDate()),
        }
    }
    else {
        date={
            year: currDate.getFullYear(),
            month: currDate.getMonth(),
            day: currDate.getDate()
        }
    }

    return (
        <CalendarPage 
            year={date.year} 
            month={date.month} 
            day={date.day} 
        />
    );
}

export default Calendar;