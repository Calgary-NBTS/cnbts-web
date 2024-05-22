import client from '@/sanity/sanityClient';
import { groq } from 'next-sanity';
import { PageType } from '@/sanity/types/queryTypes';
import { cache } from 'react';

type Props = {
  slug: string;
};

async function _getPage({ slug }: Props): Promise<PageType> {
  return client.fetch(
    groq`*[_type=="page" && slug.current=="${slug}"] [0] {
            _id,
            title,
            "slug": slug.current,
            pageBuilder[]{
                _type == "hero" => {
                    _type,
                    heading,
                    tagline,
                    "image": image.asset->url,
                    "imageWidth": image.asset->metadata.dimensions.width,
                    "imageHeight": image.asset->metadata.dimensions.height,
                    "alt": image.alt,
                    "bgcolor": backgroundcolor.rgb,
                },
                _type == "textblock" => {
                    _type,
                    title,
                    body,
                },
                _type == "form" => {
                    _type,
                    label,
                    heading,
                    form,
                },
                _type == "gallery" => {
                    _type,
                    title,
                    images[]{
                        alt,
                        _key,
                        "url":asset->url,
                        "width": asset->metadata.dimensions.width,
                        "height": asset->metadata.dimensions.height,
                    },
                    options,
                },
                _type == "textWithIllustration" => {
                    _type,
                    _id,
                    heading,
                    tagline,
                    excerpt,
                    "image": image.asset->url,
                    "imageWidth": image.asset->metadata.dimensions.width,
                    "imageHeight": image.asset->metadata.dimensions.height,
                    "alt": image.alt,
                },
                _type == "video" => {
                    _type,
                    _id,
                    videoLabel,
                    url,
                }
            }
        }`,
  );
}

const getPage = cache(async (props: Props) => {
  return await _getPage({ ...props });
});

export default getPage;
