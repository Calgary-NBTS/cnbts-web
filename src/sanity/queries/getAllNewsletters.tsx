import client from '@/sanity/sanityClient';
import { groq } from 'next-sanity';
import { Newsletter } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getAllNewsletters(): Promise<Newsletter[]> {
  return client.fetch(
    groq`*[_type=="newsletter" && active && dateTime(now()) > dateTime(published)] | order(published desc) {
            _id,
            _createAt,
            active,
            title,
            "slug": slug.current,
            "author": author->name,
            "image": image.asset->url,
            "imageWidth": image.asset->metadata.dimensions.width,
            "imageHeight": image.asset->metadata.dimensions.height,
            "imgAlt": image.alt,
            published,
            body
        }}`,
  );
}

const getAllNewsletters = cache(async () => {
  return await _getAllNewsletters();
});

export default getAllNewsletters;
