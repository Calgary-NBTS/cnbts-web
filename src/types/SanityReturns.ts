import { PortableTextBlock } from "sanity";

export type Event = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
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
    pronouns: string;
}