import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Newsletter } from '@/sanity/types/queryTypes';
import {cache } from 'react';

async function _getAllNewsletterHeadings(): Promise<Newsletter[]> {
    return client.fetch(
        groq`*[_type=="newsletter" && active==true && dateTime(now()) > dateTime(published)] | order(published desc) {
            _id,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            "imageWidth": image.asset->metadata.dimensions.width,
            "imageHeight": image.asset->metadata.dimensions.height,
            "imgAlt": image.alt,
            published,
        }`
    )
}

const getAllNewsletterHeadings = cache(async () => {
    return await _getAllNewsletterHeadings();
})

export default getAllNewsletterHeadings;

