import Image from "next/image";
import { PortableTextBlock } from "sanity";
import PortableTextComponent from "./PortableTextCompoent";

type TextWithIllustrationProps = {
    heading: string;
    tagline: string;
    excerpt: PortableTextBlock[];
    image: string;
    alt: string;
}

const TextWithIllustration = ({heading, tagline, excerpt, image, alt}: TextWithIllustrationProps) => {

    return (
        <section className='flex'>
            <div>
                <Image src={image}
                    width={200}
                    height={200}
                    alt={alt}
                />
            </div>
            <div>
                <h2 className='text-4xl font-semibold'>{heading}</h2>
                <p className='text-xl'>{tagline}</p>
                <PortableTextComponent value={excerpt} />
            </div>

        </section>
    )
}

export default TextWithIllustration;