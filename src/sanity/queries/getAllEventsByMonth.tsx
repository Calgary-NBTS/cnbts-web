import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type Props = {
    year: number;
    month: number;
}

async function _getAllEventsByMonth({year,month}: Props): Promise<Event[]> {
    
    const start = new Date(year, month, 1);
    const lastDayofMonth = new Date(year,month + 1,0).getDate();
    const end = new Date(year, month, lastDayofMonth, 23, 59, 59, 999);
    

    return client.fetch(
        groq`*[_type=="event" && active==true && dateTime(time) >= dateTime("${start.toISOString()}") && dateTime(time) <= dateTime("${end.toISOString()}")]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            locationname,
            location,
            "image": image.asset->url,
            "imageWidth": image.asset->metadata.dimensions.width,
            "imageHeight": image.asset->metadata.dimensions.height,
            "imageAlt": image.alt,
            "posterImage": posterImage.asset->url,
            "posterImageWidth": posterImage.asset->metadata.dimensions.width,
            "posterImageHeight": posterImage.asset->metadata.dimensions.height,
            "posterImageAlt": posterImage.alt,
            url,
            time,
            timeend,
            content
        }`
    );
}

const getAllEventsByMonth = cache(async (props:Props) => {
    return await _getAllEventsByMonth({...props});
});

export default getAllEventsByMonth;

