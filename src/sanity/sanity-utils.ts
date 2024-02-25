import client from './sanityClient';
import { groq } from "next-sanity";
import { Event, Staff } from '@/sanity/types/queryTypes';

type eventsProps = {
    year?: string;
    month?: string;
    day?: string
}

export async function getEvents({year,month,day}: eventsProps={}): Promise<Event[]> {
    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dayNow = now.getDate();

    let when;
    if (year&&month) {
        when = new Date(Number(year), Number(month), day ? Number(day) : undefined)
    }
    

    return client.fetch(
        groq`*[_type=="event"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "imgAlt": image.alt,
            url,
            time,
            timeend,
            content
        }`
    )
}

export async function getStaff({}={}): Promise<Staff[]> {
    return client.fetch(
        groq`*[_type=="staff"]{
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

