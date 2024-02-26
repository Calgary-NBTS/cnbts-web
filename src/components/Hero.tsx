import Image from "next/image";

type HeroProps = {
    heading: string;
    tagline: string;
    image: string;
    alt: string;
}

const Hero = ({heading, tagline, image, alt}: HeroProps) => {

    return (
        <section className='w-full flex justify-around bg-purple-500'>
            <div className="m-4">
                <h1 className="my-3 text-4xl">{heading}</h1>
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
        </section>
    )
}

export default Hero;