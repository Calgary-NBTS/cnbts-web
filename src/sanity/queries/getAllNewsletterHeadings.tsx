import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Newsletter } from '@/sanity/types/queryTypes';
import {cache } from 'react';

async function _getAllNewsletters(): Promise<Newsletter[]> {
    return client.fetch(
        groq`*[_type=="newsletter" && active && dateTime(now()) > dateTime(published)] | order(published desc) {
            _id,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            "imgAlt": image.alt,
            published,
        }}`
    )
}

const getAllNewsletters = cache(async () => {
    return await _getAllNewsletters();
})

export default getAllNewsletters;

