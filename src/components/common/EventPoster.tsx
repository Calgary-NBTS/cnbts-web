import { Event } from '@/sanity/types/queryTypes';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';

type Props = {
    event: Event;
}

const EventPoster = ({event}: Props) => {

    return (
        <Box >
            <Box>
                <Typography component='h3' variant='h3'>{event.name}</Typography>
            </Box>
            <Box>
                <Image 
                    src={event.image}
                    width={event.imageWidth}
                    height={event.imageHeight}
                    alt={event.imageAlt}
                    sizes='(max-width: 600px) 100vh, (max-width: 1200px) 50vh, 33vh'
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '100%'
                    }}
                />
            </Box>
        </Box>
    )
}

export default EventPoster;