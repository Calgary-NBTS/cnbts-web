import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { PageType } from '@/sanity/types/queryTypes';

export default async function getAllPageSlugs(): Promise<PageType[]> {
    return client.fetch(
        groq`*[_type=="page"]{
            "slug": slug.current,
        }`
    )
}
