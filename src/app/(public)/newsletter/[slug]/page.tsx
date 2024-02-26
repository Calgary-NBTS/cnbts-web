import NewsletterPage from "@/components/NewsletterPage"

export default function NewsLetter({params}: {params: {slug?: string}}) {
    return <NewsletterPage slug={params.slug} />
}