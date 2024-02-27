import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { PageType } from '@/sanity/types/queryTypes';

export default async function getPage({slug}: {slug:string}): Promise<PageType[]> {
    return client.fetch(
        groq`*[_type=="page" && slug.current=="${slug}"]{
            _id,
            title,
            "slug": slug.current,
            pageBuilder[]{
                _type == "hero" => {
                    _type,
                    _id,
                    _createdAt,
                    heading,
                    tagline,
                    "image": image.asset->url,
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
                    image,
                },
                _type == "video" => {
                    _type,
                    _id,
                    videoLabel,
                    url,
                }
            }

        }`
    )

}
