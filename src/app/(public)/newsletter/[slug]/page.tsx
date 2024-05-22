import NewsletterPage from '@/components/newsletter/NewsletterPage';
import getAllNewsLetterSlugs from '@/sanity/queries/getAllNewsletterSlugs';

export async function generateStaticParams() {
  const nlSlugs = await getAllNewsLetterSlugs();

  return nlSlugs.map((nlSlug) => ({
    slug: nlSlug.slug,
  }));
}

type PageParams = {
  params: {
    slug: string;
  };
};

const Page = ({ params }: PageParams) => {
  return <NewsletterPage slug={params.slug} />;
};

export default Page;
