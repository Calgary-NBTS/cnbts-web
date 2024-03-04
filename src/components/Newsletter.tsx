import { PortableTextBlock } from "sanity";
import FormattedText from "./FormattedText";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Newsletter = ({title, content}: {title: string; content: PortableTextBlock[]}) => {

    return (
        <Box>
            <Container>
                <Paper elevation={2}>
                    <Box padding={2}>
                        <Typography variant='h4' component='h3'>{title}</Typography>
                        <FormattedText value={content} />
                    </Box>
                </Paper>
            </Container>
        </Box>
    )

}
    
export default Newsletter;