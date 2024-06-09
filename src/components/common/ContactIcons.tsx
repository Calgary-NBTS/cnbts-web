import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { FaFacebook, FaDiscord, FaSquareInstagram } from 'react-icons/fa6';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import FeedbackForm from './FeedbackForm';

const ContactIcons = () => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <Box>
        <Typography component="p">
          Come join us or contact us at the below links
        </Typography>
      </Box>
      <Box>
        <Tooltip title="Facebook">
          <Button
            component="a"
            href="https://www.facebook.com/groups/1494690848018790"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Typography
              variant="h3"
              component="h4"
              sx={{ color: 'primary.contrastText' }}
            >
              <FaFacebook />
            </Typography>
          </Button>
        </Tooltip>
        <Tooltip title="Discord">
          <Button
            component="a"
            href="https://discord.gg/t7a9xFmfcA"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <Typography
              variant="h3"
              component="h4"
              sx={{ color: 'primary.contrastText' }}
            >
              <FaDiscord />
            </Typography>
          </Button>
        </Tooltip>
        <Tooltip title="Instagram">
          <Button
            component="a"
            href="https://www.instagram.com/calgary_enby_trans_society?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Typography
              variant="h3"
              component="h4"
              sx={{ color: 'primary.contrastText' }}
            >
              <FaSquareInstagram />
            </Typography>
          </Button>
        </Tooltip>
        <Tooltip title="Email">
          <Button
            component="a"
            href="mailto:calgarynbts@gmail.com"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Typography
              variant="h3"
              component="h4"
              sx={{ color: 'primary.contrastText' }}
            >
              <MdOutlineAlternateEmail />
            </Typography>
          </Button>
        </Tooltip>
        <FeedbackForm />
      </Box>
    </Box>
  );
};

export default ContactIcons;
