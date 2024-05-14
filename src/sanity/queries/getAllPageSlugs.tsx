import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { PageType } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getAllPageSlugs(): Promise<PageType[]> {
    return client.fetch(
        groq`*[_type=="page"]{
            "slug": slug.current,
        }`
    );
}

const getAllPageSlugs = cache(async () => {
    return await _getAllPageSlugs();
})

export default getAllPageSlugs;