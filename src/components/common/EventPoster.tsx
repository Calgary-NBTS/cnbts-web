import { Event } from '@/sanity/types/queryTypes';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  event: Event;
};

const EventPoster = ({ event }: Props) => {
  return (
    <Box>
      <Box>
        <Typography component="h3" variant="h3">
          {event.title
            ? event.title
            : event.name
              ? event.name
              : 'Missing Title'}
        </Typography>
      </Box>
      <Box>
        <Image
          src={event.posterImage}
          width={event.posterImageHeight}
          height={event.posterImageWidth}
          alt={event.posterImageAlt}
          sizes="(max-width: 600px) 100vh, (max-width: 1200px) 50vh, 33vh"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default EventPoster;
