import PagesPage from "@/components/PagesPage";
import { getAllPageSlugs } from "@/sanity/queries";

export async function generateStaticParams() {
    const pages = await getAllPageSlugs();
   
    return pages.map((page) => ({
      slug: page.slug,
    }))
  }


type PageParams = {
    params: {
        slug: string;
    }
}

const Page = ({params}: PageParams) => {
    return <PagesPage slug={params.slug} />
}

export default Page;