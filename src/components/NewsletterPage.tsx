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
    const newsletterData = slug ? getNewsletter({slug}) : getLatestNewsletter();
    const newsHeadingsData = getAllNewsletterHeadings();
    const [newsletter, newsHeadings] = await Promise.all([newsletterData, newsHeadingsData]);
    
    return (
    <Box sx={{display: 'flex'}}>
        <NewsletterList newsletters={newsHeadings}/>
        {!newsletter && notFound()}
        {newsletter &&
            <Newsletter title={newsletter.title} content={newsletter.body} />
        }
    </Box>
    )
    
}
    
export default NewsletterPage;