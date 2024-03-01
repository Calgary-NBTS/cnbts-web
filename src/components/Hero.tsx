import Image from "next/image";
import {Box} from '@mui/material'

type HeroProps = {
    heading: string;
    tagline: string;
    image: string;
    alt: string;
}

const Hero = ({heading, tagline, image, alt}: HeroProps) => {

    return (
        <Box component="section" sx={{display: 'flex'}}>
            <div className="m-4">
                <h1 className="my-3 text-4xl font-bold">{heading}</h1>
                <p>{tagline}</p>
            </div>
            <div className="text-right">
                <Image
                    src={image}
                    width={200}
                    height={200}
                    alt={alt}
                />
            </div>
        </Box>
    )
}

export default Hero;