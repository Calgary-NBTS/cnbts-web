import client from '@/sanity/sanityClient';
import { groq } from "next-sanity";
import { SiteSettingsType } from '@/sanity/types/queryTypes';
import { cache } from 'react';

async function _getSiteSettings(): Promise<SiteSettingsType> {
    return client.fetch(
        groq`*[_type=="sitesettings"][0]{
            title,
            description,
            domainname,
            bgdark,
            bglight
          }`
    )
}

const getSiteSettings = cache(async () => {
    return  await _getSiteSettings();
})

export default getSiteSettings;