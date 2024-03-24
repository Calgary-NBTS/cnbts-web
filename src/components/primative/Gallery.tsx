'use client'
import client from '@/sanity/sanityClient';
import Image from "next/image";
import { ImageData } from "@/sanity/types/queryTypes";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageUrlBuilder from '@sanity/image-url';

const Gallery = ({title, images}: {title: string; images: ImageData[]}) => {
    const builder = imageUrlBuilder(client);

    function urlFor(source: string) {
        return builder.image(source)
      }
    
    const settings = {
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <Slider className="m-auto mb-8 w-80" {...settings}>
            {images.map(image => {
                const url = urlFor(image.url).height(500).width(320).url()
                return (
                    <article key={image._key}>
                        <Image 
                            src={url}
                            width={320}
                            height={500}
                            alt={image.alt}
                        />
                    </article>
                )
            })}
        </Slider>
    )
}

export default Gallery;