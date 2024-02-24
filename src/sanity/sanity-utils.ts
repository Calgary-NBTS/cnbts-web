import client from './sanityClient';
import { groq } from "next-sanity";
import { Event, Staff } from '@/sanity/types/queryTypes';

export async function getEvents(): Promise<Event[]> {
    return client.fetch(
        groq`*[_type=="event"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "imgAlt": image.asset->alt,
            url,
            time,
            timeend,
            content
        }`
    )
}

export async function getStaff(): Promise<Staff[]> {
    return client.fetch(
        groq`*[_type=="staff"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "imgAlt": image.asset->alt,
            joined,
            bio,
            birthday,
            pronouns,
            order,
        }`
    )
}
