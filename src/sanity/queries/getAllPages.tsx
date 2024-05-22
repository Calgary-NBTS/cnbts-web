import client from '@/sanity/sanityClient';
import { groq } from 'next-sanity';
import { PageType } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getAllPages(): Promise<PageType[]> {
  return client.fetch(
    groq`*[_type=="page"]{
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

const getAllPages = cache(async () => {
  return await _getAllPages();
});

export default getAllPages;
