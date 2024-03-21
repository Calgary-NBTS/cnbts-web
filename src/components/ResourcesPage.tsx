import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ResourcesPage = () => {
    return (
        <Box>
            <Container>
                <Box paddingY={2}>
                    <Accordion defaultExpanded>
                        <AccordionSummary>
                            <Typography>Emergency Contancts</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>911</Typography>
                            <Typography>988</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>Mental Health Supports</AccordionSummary>
                        <AccordionDetails>List here</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>Pride Organizations</AccordionSummary>
                        <AccordionDetails>List here</AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>Social Support Groups</AccordionSummary>
                        <AccordionDetails>List here</AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </Box>
    );
}

export default ResourcesPage;