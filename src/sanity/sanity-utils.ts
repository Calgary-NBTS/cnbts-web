import { createClient, groq } from "next-sanity";
import { Event } from "@/types/Event";

export async function getEvents(): Promise<Event[]> {
    const client = createClient({
        projectId: '9108qgzh',
        dataset: 'production',
        apiVersion: "2024-02-14",
    });

    return client.fetch(
        groq`*[_type=="event"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            time,
            timeend,
            content
        }`
    )

}
