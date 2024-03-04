import { getUpcomingEvents } from "@/sanity/queries";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import MaterialLink from '@mui/material/Link';
import { MdExpandMore } from "react-icons/md";

import FormattedText from "./FormattedText";

const UpcomingEvents = async () => {
    const events = await getUpcomingEvents();

    const niceDay = (date:Date) => {
        const d = new Date(date);
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const month = d.getMonth();
        const dayW = d.getDay();
        const day = d.getDate();

        return `${days[dayW]} ${months[month]} ${day}`;
    }

    const niceTime = (time:Date) => {
        const d = new Date(time);
        const h = d.getHours();
        const m = d.getMinutes();
        let ampm = 'AM';
        let hour;
        if (h>=12) {
            ampm = 'PM'
            hour = h-12;
        }
        else if (h === 0) {
            hour = 12;
        }

        let min;

        if (m<10) {
            min = `0${m}`
        } else {
            min = m;
        }

        return `${hour}:${min} ${ampm}`;
    }
    
    return (
        <Box paddingY={4}>
        <Container>
            <Typography variant='h4' component='h3'>Upcoming Events</Typography>
            <Box paddingTop={2}>
            {events.map(event => (
                <Accordion key={event._id}>
                    <AccordionSummary
                        expandIcon={<MdExpandMore />}
                        aria-controls={`${event.slug}-content`}
                        id={`${event.slug}-header`}
                    >
                        <Grid container width='100%'>
                            <Grid xs={4}>
                                {event.name}
                            </Grid>
                            <Grid xs={4}>
                                {`${niceDay(event.time)}`}
                            </Grid>
                            <Grid xs={4}>
                                <MaterialLink href={event.url} target='_blank' color='primary'>{event.locationname}</MaterialLink>
                            </Grid>
                        </Grid>
                        
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormattedText value={event.content} />
                        <Box>When: {`${niceTime(event.time)} - ${niceTime(event.timeend)}`}</Box>
                        <Box>Where: {event.location}</Box>
                    </AccordionDetails>
                </Accordion>
            ))}
            </Box>
        </Container>
        </Box>
    )
}

export default UpcomingEvents;