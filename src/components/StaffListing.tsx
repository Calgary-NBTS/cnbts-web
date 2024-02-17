import Image from "next/image";
import { PortableTextBlock } from "sanity";
import RainbowHeart from '../../public/RainbowHeart.svg'

type StaffListingProps = {
    name?: string;
    image?: string;
    bio?: PortableTextBlock[];
}

const StaffListing = ({name, image, bio}: StaffListingProps) => {
    return (
        <div className="border flex-col">
            <div>
                {name}
            </div>
            <div className="flex">
                <Image src={image ? image : RainbowHeart} width={200} height={300} alt={`Picture of ${name}`} />
            </div>
        </div>
    )
}

export default StaffListing;