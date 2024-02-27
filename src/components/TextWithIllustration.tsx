import Image from "next/image";
import { PortableTextBlock } from "sanity";
import PortableTextComponent from "./PortableTextCompoent";
import Heart from '@/../public/images/RainbowHeart.svg';

type TextWithIllustrationProps = {
    heading: string;
    tagline: string;
    excerpt: PortableTextBlock[];
    image: string;
    alt: string;
}

const TextWithIllustration = ({heading, tagline, excerpt, image, alt}: TextWithIllustrationProps) => {

    const pic = image? image: Heart;
    return (
        <section className='flex'>
            <div>
                <Image src={pic}
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