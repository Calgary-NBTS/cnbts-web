import client from '@/sanity/sanityClient';
import { groq } from 'next-sanity';
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type Props = {
  year: number;
  month: number;
  day: number;
};

async function _getTodaysEvents({ year, month, day }: Props): Promise<Event[]> {
  const start = new Date(year, month, day);
  const end = new Date(year, month, day, 23, 59, 59, 999);

  return client.fetch(
    groq`*[_type=="event" && active==true && dateTime(time) >= dateTime("${start.toISOString()}") && dateTime(time) <= dateTime("${end.toISOString()}")]{
            _id,
            _createAt,
            title,
            name, // deprecated - replaced by title
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
        }`,
  );
}

const getTodaysEvents = cache(async (props: Props) => {
  return await _getTodaysEvents({ ...props });
});

export default getTodaysEvents;
