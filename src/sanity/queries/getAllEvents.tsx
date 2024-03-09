import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type Props = {
    year?: string;
    month?: string;
    day?: string
}

async function _getAllEvents({year,month,day}: Props={}): Promise<Event[]> {
    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dayNow = now.getDate();

    let when;
    if (year&&month) {
        when = new Date(Number(year), Number(month), day ? Number(day) : undefined)
    }
    
    return client.fetch(
        groq`*[_type=="event" && active==true]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            locationname,
            location,
            "image": image.asset->url,
            "imageWidth": image.asset->metadata.dimensions.width,
            "imageHeight": image.asset->metadata.dimensions.height,
            "imgAlt": image.alt,
            url,
            time,
            timeend,
            content
        }`
    )
}

const getAllEvents = cache(async () => {
    const item = await _getAllEvents();
    return item;
})

export default getAllEvents;

