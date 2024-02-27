// import client from '@/sanity/sanityClient';
import Image from "next/image";
import { ImageData } from "@/sanity/types/queryTypes";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import imageUrlBuilder from '@sanity/image-url';

const Gallery = ({title, images}: {title: string; images: ImageData[]}) => {
    // const builder = imageUrlBuilder(client);

    // function urlFor(source: string) {
    //     return builder.image(source)
    //   }
    
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div></div>
            // <Slider className="m-auto w-10/12 lg:w-9/12" {...settings}>
            //     {images.map(image => {
            //         return (
            //             <article key={image._key}>
            //                 <Image 
            //                     src={image.url}
            //                     width={image.width}
            //                     height={image.height}
            //                     alt={image.alt}
            //                 />
            //             </article>
            //         )
            //     })}
            // </Slider>
    )
}

export default Gallery;