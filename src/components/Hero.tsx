import Image from "next/image";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type HeroProps = {
    heading: string;
    tagline: string;
    image: string;
    alt: string;
    imageWidth: number;
    imageHeight: number;
}

const Hero = ({heading, tagline, image, imageWidth, imageHeight, alt}: HeroProps) => {

    return (
        <Box component="section" sx={{backgroundColor: '#BA68C8'}} padding={1}>
            <Container sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex:'1 1 0px'}}>
                <Box sx={{flexGrow: 1, width:0}}>
                    <Typography variant='h4' component='h1' className="my-3 text-4xl font-bold">{heading}</Typography>
                    <Typography>{tagline}</Typography>
                </Box>
                <Box sx={{flexGrow: 1, width: 0}}>
                    <Image
                        src={image}
                        width={imageWidth}
                        height={imageHeight}
                        alt={alt}
                        priority
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                        // sizes='(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 25vw'
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default Hero;