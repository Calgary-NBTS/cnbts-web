import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { MdExpandMore } from 'react-icons/md';
import Typography from '@mui/material/Typography';

const ResourcesPage = () => {
  return (
    <Box>
      <Container>
        <Box paddingY={2}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>Emergency Contancts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>911</Typography>
              <Typography>988</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              Mental Health Supports
            </AccordionSummary>
            <AccordionDetails>List here</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              Pride Organizations
            </AccordionSummary>
            <AccordionDetails>List here</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              Social Support Groups
            </AccordionSummary>
            <AccordionDetails>List here</AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default ResourcesPage;
