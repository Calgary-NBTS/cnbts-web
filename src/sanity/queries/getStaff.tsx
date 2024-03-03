import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Staff } from '@/sanity/types/queryTypes';

export default async function getStaff(): Promise<Staff[]> {
    return client.fetch(
        groq`*[_type=="staff"] | order(order asc) {
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "imgAlt": image.alt,
            joined,
            bio,
            birthday,
            pronouns,
            order,
        }`
    )
}

