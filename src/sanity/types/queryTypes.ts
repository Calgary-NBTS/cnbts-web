import { PortableTextBlock } from "sanity";

export type Event = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    location: string;
    time: Date;
    timeend: Date;
    image: string;
    url: string;
    content: PortableTextBlock[];
}

export type Staff = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    joined: Date;
    bio: PortableTextBlock[];
    birthday: Date;
    pronouns: string;
}

export type Newsletter = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    author: string;
    image: string;
    publishedAt: Date;
    body: PortableTextBlock[];
}