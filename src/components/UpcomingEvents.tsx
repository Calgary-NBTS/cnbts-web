import { getUpcomingEvents } from "@/sanity/queries";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Masonry from '@mui/lab/Masonry';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import MaterialLink from '@mui/material/Link';
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import FormattedText from "./FormattedText";
import RainbowHeart from '@/../public/images/RainbowHeart.svg'
export const revalidate = 3600;
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
    
    const opts = {timeZone:'America/Edmonton'}

    return (
        <Box padding={{xxs:2, md:3, xl:5}}>
            <Masonry columns={{xxs: 1, md: 2}} spacing={{xxs:2, md:4, xl:5}}>
                {events.map(event => (
                    <Paper key={event._id} elevation={4} sx={{borderRadius: '1em'}}>
                        <Image
                            src={event.posterImage ? event.posterImage : RainbowHeart}
                            width={event.posterImageWidth}
                            height={event.posterImageHeight}
                            alt={event.posterImageAlt ? event.posterImageAlt : event.name}
                            sizes='(max-width: 900px) 95vw, (max-width: 1200px) 50vw, 33vw'
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderTopLeftRadius: '1em',
                                borderTopRightRadius: '1em',

                            }}
                        />
                        <Box padding={1}>
                            <Typography component='h3' variant='h5'>
                                {event.name}
                            </Typography>
                            <Typography variant='subtitle1'>    
                                {`${new Date(event.time).toLocaleDateString('en-CA', {...opts, dateStyle: 'long'})} at ${new Date(event.time).toLocaleTimeString('en-CA', {...opts, timeStyle:'short'})} - ${new Date(event.timeend).toLocaleTimeString('en-CA', {...opts, timeStyle:'short'})}`}
                            </Typography>
                            <Typography><MaterialLink href={event.url} target='_blank' color='primary'>{event.locationname}</MaterialLink></Typography>
                            <FormattedText value={event.content} />
                        </Box>
                    </Paper>
                ))}
            </Masonry>
        </Box>
    )
}

export default UpcomingEvents;