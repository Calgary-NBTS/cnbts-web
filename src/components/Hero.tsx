import Image from "next/image";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type HeroProps = {
    heading: string;
    tagline: string;
    image: string;
    alt: string;
}

const Hero = ({heading, tagline, image, alt}: HeroProps) => {

    return (
        <Box component="section" sx={{backgroundColor: '#BA68C8'}} padding={2}>
            <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box>
                    <Typography variant='h4' component='h1' className="my-3 text-4xl font-bold">{heading}</Typography>
                    <Typography>{tagline}</Typography>
                </Box>
                <Box>
                    <Image
                        src={image}
                        width={200}
                        height={200}
                        alt={alt}
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default Hero;