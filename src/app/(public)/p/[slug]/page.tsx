import PagesPage from "@/components/PagesPage";

type PageParams = {
    params: {
        slug: string;
    }
}

const Page = ({params}: PageParams) => {
    return <PagesPage slug={params.slug} />
}

export default Page;