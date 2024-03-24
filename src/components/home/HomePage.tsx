import Hero from './Hero';
import UpcomingEvents from './UpcomingEvents';
import getLatestNewsletter from '@/sanity/queries/getLatestNewsletter';
import Newsletter from '@/components/newsletter/Newsletter';
import EnbyDragon from '@/../public/images/logos/EnbyDragon.png';
import TransDragon from '@/../public/images/logos/TransDragon.png';

export const revalidate = 3600;
const HomePage = async () => {
    const latestNewsletter = await getLatestNewsletter();
    return (
        <>
            <Hero heading='Hi Friends!'
                tagline='We welcome everyone! Come join us!'
                // image="https://cdn.sanity.io/images/9108qgzh/production/144b671ca681020a20dade9a753d311cde816620-1738x1846.png"
                image={TransDragon}
                imageWidth={1738}
                imageHeight={1846}
                alt='Purple, yellow, green and white dragon wrapped around non-binary symbol - large circle with a smaller asterisk connected on top'
            />
            <UpcomingEvents />
            <Newsletter title={latestNewsletter.title} content={latestNewsletter.body} />
        </>
    )
}
    
export default HomePage;