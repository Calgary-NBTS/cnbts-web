import { ColorValue } from "@sanity/color-input";
import { PortableTextBlock } from "sanity";



export type PageType = {
    _id: string;
    _createdAt: Date; 
    title: string;
    slug: string;
    pageBuilder: [
        HeroType | 
        TextBlockType | 
        ImageGalleryType | 
        TextWithIllustrationType
    ];
}

export type PageQuery = {
    pages: PageType[];
}

export type Event = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    locationname: string;
    location: string;
    time: Date;
    timeend: Date;
    image: string;
    imgAlt: string;
    imageWidth: number;
    imageHeight: number;
    url: string;
    content: PortableTextBlock[];
}

export type Staff = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    joined: Date;
    bio: PortableTextBlock[];
    birthday: Date;
    pronouns: string;
}

export type Newsletter = {
    _id: string;
    _createdAt: Date;
    active: boolean;
    title: string;
    slug: string;
    author: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imgAlt: string;
    published: Date;
    body: PortableTextBlock[];
}

export type HeroType = {
    _type: string;
    heading: string;
    tagline: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imgAlt: string;
}

export type TextBlockType = {
    _type: string;
    title: string;
    body: PortableTextBlock[];
}

export type ImageData = {
    _key?: string;
    url: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
}

export type ImageGalleryType = {
    _type: string;
    title: string;
    images: ImageData[];
}

export type TextWithIllustrationType = {
    _type: string;
    heading: string;
    tagline: string;
    excerpt: PortableTextBlock[];
    image: string;
    imageWidth: number;
    imageHeight: number;
    alt: string;    
}

export type SiteSettingsType = {
    title: string;
    description: string;
    domainname: string;
    bglight: ColorValue;
    bgdark: ColorValue;
}