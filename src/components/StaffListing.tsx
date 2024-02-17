import Image from "next/image";
import { PortableTextBlock } from "sanity";
import RainbowHeart from '../../public/RainbowHeart.svg'

type StaffListingProps = {
    name?: string;
    image: string;
    bio?: PortableTextBlock[];
}

const StaffListing = ({name, image, bio}: StaffListingProps) => {
    return (
        <div className="border">
            <Image src={image ? image : RainbowHeart} width={200} height={300} alt={`Picture of ${name}`} />
            {name}
        </div>
    )
}

export default StaffListing;