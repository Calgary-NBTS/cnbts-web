import { getNewsletter, getLatestNewsletter, getAllNewsletterHeadings } from "@/sanity/queries";
import { notFound } from "next/navigation";

import NewsletterList from "./NewsletterList";
import Newsletter from "./Newsletter";

import Box from '@mui/material/Box';

type Props = {
    slug?: string;
}

export const revalidate = 3600;
const NewsletterPage = async ({slug}: Props) => {
    const _newsletter = slug ? getNewsletter({slug}) : getLatestNewsletter();
    const _newsLetterHeadings = getAllNewsletterHeadings();
    const [newsletter, newsLetterHeadings] = await Promise.all([_newsletter, _newsLetterHeadings]);
    
    return (
    <Box>
        {/* <NewsletterList newsletters={newsLetterHeadings}/> */}
        {!newsletter && notFound()}
        {newsletter &&
            <Newsletter title={newsletter.title} content={newsletter.body} />
        }
    </Box>
    )
    
}
    
export default NewsletterPage;