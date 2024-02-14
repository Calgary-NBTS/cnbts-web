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