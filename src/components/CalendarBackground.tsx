import Image from 'next/image';
import bgimage from '@/../public/images/backgrounds/ales-krivec-x4Jc4HKEHKg-unsplash.jpg';

export default function CalendarBackground() {
    return (

        <Image 
            alt='Mountains'
            src={bgimage}
            placeholder='blur'
            quality={75}
            fill
            // objectFit='cover'
            sizes='(max-width: 768px) 100vs, (max-width: 1200px) 50vw, 33vw'
            style={{
                // width: '100%',
                // height: 'auto',
                zIndex: -1,
                borderRadius: '2em'

            }}
        />

    )
}