import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type Props = {
    year?: string;
    month?: string;
    day?: string
}

async function _getEvents({year,month,day}: Props={}): Promise<Event[]> {
    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dayNow = now.getDate();

    let when;
    if (year&&month) {
        when = new Date(Number(year), Number(month), day ? Number(day) : undefined)
    }
    

    return client.fetch(
        groq`*[_type=="event"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            locationname,
            location,
            "image": image.asset->url,
            "imgAlt": image.alt,
            url,
            time,
            timeend,
            content
        }`
    )
}

const getEvents = cache(async () => {
    const item = await _getEvents();
    return item;
})

export default getEvents;

