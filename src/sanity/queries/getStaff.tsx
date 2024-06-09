import client from '@/sanity/sanityClient';
import { groq } from 'next-sanity';
import { Staff } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getStaff(): Promise<Staff[]> {
  return client.fetch(
    groq`*[_type=="staff" && active==true] | order(order asc) {
            _id,
            _createAt,
            name,
            "slug": slug.current,
            image,
            "imageWidth": image.asset->metadata.dimensions.width,
            "imageHeight": image.asset->metadata.dimensions.height,
            "imgAlt": image.alt,
            joined,
            bio,
            birthday,
            pronouns,
            order,
        }`,
  );
}

const getStaff = cache(async () => {
  return await _getStaff();
});

export default getStaff;
