import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type eventsProps = {
    year?: string;
    month?: string;
    day?: string
}

async function _getUpcomingEvents({year,month,day}: eventsProps={}): Promise<Event[]> {
    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dayNow = now.getDate();

    let when;
    if (year&&month) {
        when = new Date(Number(year), Number(month), day ? Number(day) : undefined)
    }
    
    return client.fetch(
        groq`*[_type=="event" && dateTime(time) > dateTime(now())] | order(time asc) [0...4] {
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

const getUpcomingEvents = cache(async (props:eventsProps) => {
    return await _getUpcomingEvents({...props});
})

export default getUpcomingEvents;

