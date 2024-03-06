import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getUpcomingEvents(): Promise<Event[]> {
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

const getUpcomingEvents = cache(async () => {
    return await _getUpcomingEvents();
})

export default getUpcomingEvents;

