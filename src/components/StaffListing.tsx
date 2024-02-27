import client from '@/sanity/sanityClient';
import Image from "next/image";
import { PortableTextBlock } from "sanity";
// import RainbowHeart from '@/public/images/RainbowHeart.svg'
import RainbowHeart from '@/../public/images/RainbowHeart.svg'
import imageUrlBuilder from '@sanity/image-url';
import {PortableText} from '@portabletext/react'
import PortableTextComponent from './PortableTextCompoent';

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
    
      const avatar = image ? urlFor(image).height(400).width(300).url() : RainbowHeart;
      const bioText = bio ? <PortableTextComponent value={bio} /> : "Nothing Here Yet";

    return (
        <div className="border flex-col bg-sky-50/75 text-black">
            <div className="p-1 bg-sky-100">
                <span className="mx-1">{name}</span><span className="mx-1">{pronouns}</span>
            </div>
            <div className="flex">
                <div>
                    <Image src={avatar} width={200} height={300} alt={`Picture of ${name}`} />
                </div>
                <div>
                    {bioText}
                </div>
            </div>
        </div>
    )
}

export default StaffListing;