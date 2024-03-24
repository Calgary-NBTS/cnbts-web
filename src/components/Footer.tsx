'use client'
import { FaFacebook, FaDiscord, FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FaCopyright } from "react-icons/fa";
import {useTheme} from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();
    return (
        <Paper 
            component='footer'
            sx={{
                bgcolor: 'primary.main', 
                color: 'primary.contrastText',
                // backgroundColor: '#DFDBE5',
                //backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\"), linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(233,233,233,1) 0%, rgba(137,213,246,1) 0%, rgba(79,195,247,1) 46%, rgba(83,164,200,1) 100%, rgba(215,215,215,1) 100%)",
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(180deg, ${theme.vars.palette.primary.light} 0%, ${theme.vars.palette.primary.main} 46%, ${theme.vars.palette.primary.dark} 100%)`,
                }}
            >
            <Container>
                <Box sx={{ padding: '1rem'}}>
                    <Box>
                        <Typography component='p'>Come join us or contact us at the below links</Typography>
                    </Box>
                    <Box>
                        <Button component="a" href="https://www.facebook.com/groups/1494690848018790" rel="noopener noreferrer" aria-label="Facebook">
                            <Typography variant="h3" component="h4" sx={{color: 'primary.contrastText'}}><FaFacebook /></Typography>
                        </Button>
                        <Button component="a" href="https://discord.gg/t7a9xFmfcA" rel="noopener noreferrer" aria-label="Discord">
                            <Typography variant="h3" component="h4"  sx={{color: 'primary.contrastText'}}><FaDiscord /></Typography>
                        </Button>
                        <Button component="a" href="https://www.instagram.com/calgary_enby_trans_society?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer" aria-label="Instagram">
                            <Typography variant="h3" component="h4"  sx={{color: 'primary.contrastText'}}><FaSquareInstagram /></Typography>
                        </Button>
                        <Button component="a" href="mailto:calgarynbts@gmail.com" rel="noopener noreferrer" aria-label="Instagram">
                            <Typography variant="h3" component="h4"  sx={{color: 'primary.contrastText'}}><MdOutlineAlternateEmail /></Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Paper>
    );
}
   
export default Footer;