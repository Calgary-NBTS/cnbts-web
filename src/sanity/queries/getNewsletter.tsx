import client from '@/sanity/sanityClient';
import { groq } from 'next-sanity';
import { Newsletter } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type Props = {
  slug: string;
};

async function _getNewsletter({ slug }: Props): Promise<Newsletter> {
  return client.fetch(
    groq`*[_type=="newsletter" && slug.current=="${slug}"] [0] {
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
        }`,
  );
}

const getNewsletter = cache(async (props: Props) => {
  return await _getNewsletter({ ...props });
});

export default getNewsletter;
