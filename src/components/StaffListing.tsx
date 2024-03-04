import client from '@/sanity/sanityClient';
import Image, { ImageLoaderProps } from "next/image";
import { PortableTextBlock } from "sanity";
import RainbowHeart from '@/../public/images/RainbowHeart.svg'
import imageUrlBuilder from '@sanity/image-url';
import FormattedText from './FormattedText';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type StaffListingProps = {
    name?: string;
    image?: string;
    bio: PortableTextBlock[];
    pronouns: string | undefined;
}

const StaffListing = ({name, image, bio, pronouns}: StaffListingProps) => {

    const builder = imageUrlBuilder(client);

    function urlFor(source: string) {
        return builder.image(source)
    }
    
    function imageLoader({src,width,quality}:ImageLoaderProps) {
        return urlFor(src).width(width).url();
    }

      const avatar = image ? urlFor(image).height(700).width(700).url() : RainbowHeart;
      const avatar2 = image ? image : RainbowHeart;
      const bioText = bio ? <FormattedText value={bio} /> : "Nothing Here Yet";

    return (
        <Paper component='article' elevation={6}>
            <Box paddingX={2} paddingY={1} className="p-1 bg-sky-100">
                <Typography sx={{display: 'inline-block'}} variant='h5' component='h3'>{name}</Typography>
                <Typography paddingX={1} sx={{display: 'inline-block'}}>{pronouns}</Typography>
            </Box>
            <Box>
                <Image
                // loader={imageLoader} 
                    src={avatar} 
                    width={700} 
                    height={700} 
                    alt={`Picture of ${name}`} 
                    style={{borderRadius: '0.5rem', width: '100%', height: 'auto'}} 
                    sizes=''
                    // fill={true}
                />
            </Box>
            <Typography component='div' paddingLeft={2}>
                    {bioText}
            </Typography>
        </Paper>
    )
}

export default StaffListing;