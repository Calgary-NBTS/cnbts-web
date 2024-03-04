import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Newsletter } from '@/sanity/types/queryTypes';
import {cache } from 'react';

async function _getLatestNewsletter(): Promise<Newsletter> {
    return client.fetch(
        groq`*[_type=="newsletter" && active && dateTime(now()) > dateTime(published)] | order(published desc) [0] {
            _id,
            _createAt,
            active,
            title,
            "slug": slug.current,
            "author": author->name,
            "image": image.asset->url,
            "imgAlt": image.alt,
            published,
            body
        }`
    )
}

const getLatestNewsletter = cache(async () => {
    return await _getLatestNewsletter();
})

export default getLatestNewsletter;

