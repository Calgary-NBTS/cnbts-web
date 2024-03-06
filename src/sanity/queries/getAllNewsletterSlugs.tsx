import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Newsletter } from '@/sanity/types/queryTypes';
import {cache } from 'react';

async function _getAllNewsletterSlugs(): Promise<Newsletter[]> {
    return client.fetch(
        groq`*[_type=="newsletter" && active && dateTime(now()) > dateTime(published)] {
            "slug": slug.current,
        }`
    )
}

const getAllNewsLetterSlugs = cache(async () => {
    return await _getAllNewsletterSlugs();
})

export default getAllNewsLetterSlugs;

