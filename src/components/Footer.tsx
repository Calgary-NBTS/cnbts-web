import { FaFacebook, FaDiscord, FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <Paper component='footer' sx={{bgcolor: 'primary.main', color: 'primary.contrastText'}}>
            <Container>
                <Box sx={{padding: '1rem'}}>
                    <Box className="m-2">
                        <Typography component='p'>Come join us or contact us at the below links</Typography>
                    </Box>
                    <Box>
                        <Button component="a" href="https://www.facebook.com/groups/1494690848018790" rel="noopener noreferrer" aria-label="Facebook">
                            <Typography variant="h3" component="h4" sx={{color: 'white'}}><FaFacebook /></Typography>
                        </Button>
                        <Button component="a" href="https://discord.gg/t7a9xFmfcA" rel="noopener noreferrer" aria-label="Discord">
                            <Typography variant="h3" component="h4"  sx={{color: 'white'}}><FaDiscord /></Typography>
                        </Button>
                        <Button component="a" href="https://www.instagram.com/calgary_enby_trans_society?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer" aria-label="Instagram">
                            <Typography variant="h3" component="h4"  sx={{color: 'white'}}><FaSquareInstagram /></Typography>
                        </Button>
                        <Button component="a" href="mailto:calgarynbts@gmail.com" rel="noopener noreferrer" aria-label="Instagram">
                            <Typography variant="h3" component="h4"  sx={{color: 'white'}}><MdOutlineAlternateEmail /></Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Paper>
    );
}
   
export default Footer;