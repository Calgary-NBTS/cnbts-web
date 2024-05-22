import { getUpcomingEvents } from '@/sanity/queries';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import MaterialLink from '@mui/material/Link';
import { MdExpandMore } from 'react-icons/md';
import Image from 'next/image';
import FormattedText from '../primative/FormattedText';
import RainbowHeart from '@/../public/images/RainbowHeart.svg';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const revalidate = 3600;
const UpcomingEvents = async () => {
  const events = await getUpcomingEvents();

  const opts = { timeZone: 'America/Edmonton' };

  return (
    <Box padding={{ xxs: 1, xs: 2, md: 3, xl: 4 }}>
      <Masonry
        columns={{ xxs: 1, md: 2, xl: 4 }}
        spacing={{ xxs: 2, md: 4, xl: 5 }}
      >
        {events.map((event) => (
          <Paper
            component="article"
            key={event._id}
            elevation={4}
            sx={{ borderRadius: '1em' }}
          >
            <Image
              src={event.posterImage ? event.posterImage : RainbowHeart}
              width={event.posterImageWidth}
              height={event.posterImageHeight}
              alt={event.posterImageAlt ? event.posterImageAlt : event.name}
              sizes="(max-width: 900px) 95vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: '100%',
                height: 'auto',
                borderTopLeftRadius: '1em',
                borderTopRightRadius: '1em',
              }}
            />
            <Box padding={1}>
              <Typography component="h3" variant="h5">
                {event.name}
              </Typography>
              <Typography variant="subtitle1">
                {`${new Date(event.time).toLocaleDateString('en-CA', { ...opts, dateStyle: 'long' })} at ${new Date(event.time).toLocaleTimeString('en-CA', { ...opts, timeStyle: 'short' })} - ${new Date(event.timeend).toLocaleTimeString('en-CA', { ...opts, timeStyle: 'short' })}`}
              </Typography>
              <MaterialLink href={event.url} target="_blank" color="primary">
                {event.locationname}{' '}
                <Typography component="span" fontSize="small">
                  <FaExternalLinkAlt />
                </Typography>
              </MaterialLink>
              <FormattedText value={event.content} />
            </Box>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default UpcomingEvents;
