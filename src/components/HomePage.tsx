import Image from "next/image";
import EnbyLogoNoBg from '@/../public/images/logos/EnbyLogoNoBG.png';
import Hero from "./Hero";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import UpcomingEvents from "./UpcomingEvents";
import getLatestNewsletter from "@/sanity/queries/getLatestNewsletter";
import Newsletter from "./Newsletter";

export const revalidate = 3600;
const HomePage = async () => {
    const latestNewsletter = await getLatestNewsletter();
    return (
        <>
            <Hero heading="Hi Friends!"
                tagline=""
                image="https://cdn.sanity.io/images/9108qgzh/production/144b671ca681020a20dade9a753d311cde816620-1738x1846.png"
                imageWidth={1738}
                imageHeight={1846}
                alt="Purple, yellow, green and white dragon wrapped around non-binary symbol - large circle with a smaller asterisk connected on top"
            />
            <UpcomingEvents />
            <Newsletter title={latestNewsletter.title} content={latestNewsletter.body} />
            <Container component='section'>
                <Box sx={{margin: 'auto', textAlign: 'center'}}>
                <Image
                    src={EnbyLogoNoBg}
                    alt="Calgary Non-Binary and Transgender Society Logo - Trans Flag and Transgender Symbol Wrapped with Dragon"
                    width={300} 
                    height={300}
                    priority
                />
                <p className="flex items-center justify-center">Coming Soon</p>
                </Box>
            </Container>
        </>
    )
}
    
export default HomePage;