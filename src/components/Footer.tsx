import { FaFacebook, FaDiscord, FaSquareInstagram } from "react-icons/fa6";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <Box component='footer' sx={{backgroundColor: 'primary.main', color: 'primary.contrastText'}} className="p-4 bg-gradient-to-b from-sky-300 to-sky-400">
            <Container>
                <Box sx={{padding: '1rem'}}>
                    <Box className="m-2">
                        <Typography component='p'>Come join us at any or all of the below platorms.</Typography>
                    </Box>
                    <Box sx={{margin: '2rem', gap: '2rem'}} className="m-2 flex gap-4 text-4xl">
                        <Button component="a" href="https://www.facebook.com/groups/1494690848018790" rel="noopener noreferrer" aria-label="Facebook">
                            <Typography variant="h3" component="h4" sx={{color: 'white'}}><FaFacebook /></Typography>
                        </Button>
                        <Button component="a" href="https://discord.gg/t7a9xFmfcA" rel="noopener noreferrer" aria-label="Discord">
                            <Typography variant="h3" component="h4"  sx={{color: 'white'}}><FaDiscord /></Typography>
                        </Button>
                        <Button component="a" href="https://www.instagram.com/calgary_enby_trans_society?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer" aria-label="Instagram">
                            <Typography variant="h3" component="h4"  sx={{color: 'white'}}><FaSquareInstagram /></Typography>
                            </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
   
export default Footer;