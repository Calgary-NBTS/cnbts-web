import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getFirstEventTime(): Promise<Event> {
    return client.fetch(
        groq`*[_type=="event" && active==true] | order(time asc) [0] {
            time,
        }`
    )
}

const getFirstEventTime = cache(async () => {
    return await _getFirstEventTime();
})

export default getFirstEventTime;

