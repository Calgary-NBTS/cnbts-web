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
                },
                _type == "textblock" => {
                    _type,
                    _id,
                    _createdAt,
                    title,
                    body,
                },
                _type == "form" => {
                    _type,
                    _id,
                    _createdAt,
                    label,
                    heading,
                    form,
                },
                _type == "gallery" => {
                    _type,
                    _id,
                    _createdAt,
                    images,
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
