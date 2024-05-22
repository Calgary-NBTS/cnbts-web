import getAllEventsByMonth from '@/sanity/queries/getAllEventsByMonth';
import getFirstEventTime from '@/sanity/queries/getFirstEventTime';
import getLastEventTime from '@/sanity/queries/getLastEventTime';
import EventsCalendar from './EventsCalendar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export type Params = {
  params?: {
    month: string;
    year: string;
  };
};

export const revalidate = 3600;
const CalendarPage = async ({ params }: Params) => {
  const currentDay = new Date();
  let activeMonth = currentDay.getMonth();
  let activeYear = currentDay.getFullYear();

  if (params) {
    activeYear = Number(params.year);
    activeMonth = Number(params.month);
  }

  const _events = getAllEventsByMonth({ year: activeYear, month: activeMonth });
  const _last = getLastEventTime();
  const _first = getFirstEventTime();

  const [events, last, first] = await Promise.all([_events, _last, _first]);

  return (
    <Box paddingY={2}>
      <Container>
        <EventsCalendar
          events={events}
          activeMonth={activeMonth}
          activeYear={activeYear}
          first={new Date(first.time)}
          last={new Date(last.time)}
        />
      </Container>
    </Box>
  );
};

export default CalendarPage;
