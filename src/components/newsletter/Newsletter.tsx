import { PortableTextBlock } from 'sanity';
import FormattedText from '../primative/FormattedText';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Newsletter = ({
  title,
  content,
}: {
  title: string;
  content: PortableTextBlock[];
}) => {
  return (
    <Box paddingY={2}>
      <Container>
        <Paper elevation={2}>
          <Box padding={2}>
            <FormattedText value={content} />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Newsletter;
