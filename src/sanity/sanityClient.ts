import { createClient } from "next-sanity";

const client = createClient({
    projectId: '9108qgzh',
    dataset: 'production',
    apiVersion: "2024-02-14",
    useCdn: true
});

export default client;