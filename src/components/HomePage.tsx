import Image from "next/image";
import EnbyLogoNoBg from '@/../public/images/logos/EnbyLogoNoBG.png';
import Hero from "./Hero";

const HomePage = () => {
    return (
        <>
            <Hero heading="Hello World"
                tagline="This is a weird tagliney thing idk what to do with"
                image="https://cdn.sanity.io/images/9108qgzh/production/80f1b0543f9c3cc1ca15685593f6bcff75ab9a1b-2560x2560.png"
                alt="Some Alt text for the image here"
            />
            <div>
                <Image
                    src={EnbyLogoNoBg}
                    alt="Calgary Non-Binary and Transgender Society Logo - Trans Flag and Transgender Symbol Wrapped with Dragon"
                    width={300} 
                    height={300}
                    priority
                />
                <p className="flex items-center justify-center">Coming Soon</p>
            </div>
        </>
    )
}
    
export default HomePage;