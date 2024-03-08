import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getLastEventTime(): Promise<Event> {
    return client.fetch(
        groq`*[_type=="event"] | order(time desc) [0] {
            time,
        }`
    )
}

const getLastEventTime = cache(async () => {
    return await _getLastEventTime();
})

export default getLastEventTime;

