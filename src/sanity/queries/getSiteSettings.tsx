import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { SiteSettingsType } from '@/sanity/types/queryTypes';

export default async function getSiteSettings(): Promise<SiteSettingsType[]> {
    return client.fetch(
        groq`*[_type=="sitesettings"]{
            title,
            description,
            domainname,
            bgdark,
            bglight
          }`
    )
}

