import client from '@/sanity/sanityClient';
import { groq } from 'next-sanity';
import { Event } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type Props = {
  year?: string;
  month?: string;
  day?: string;
};

async function _getAllEvents({ year, month, day }: Props = {}): Promise<
  Event[]
> {
  const now = new Date();
  const yearNow = now.getFullYear();
  const monthNow = now.getMonth();
  const dayNow = now.getDate();

  let when;
  if (year && month) {
    when = new Date(Number(year), Number(month), day ? Number(day) : undefined);
  }

  return client.fetch(
    groq`*[_type=="event" && active==true]{
            _id,
            _createAt,
            title,
            name, // deprecated - replaced by title
            "slug": slug.current,
            locationname,
            location,
            image,
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

const getAllEvents = cache(async () => {
  const item = await _getAllEvents();
  return item;
});

export default getAllEvents;
