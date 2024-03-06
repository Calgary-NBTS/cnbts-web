import { getAllPages } from "@/sanity/queries";
import {getPage} from '@/sanity/queries';
import Hero from "./Hero";
import TextBlock from "./TextBlock";
import Gallery from './Gallery';
import TextWithIllustration from "./TextWithIllustration";
import { HeroType, TextBlockType, ImageGalleryType, TextWithIllustrationType, PageType } from "@/sanity/types/queryTypes";
import { notFound } from "next/navigation";

type BuildPageProps = {
    data: PageType;
}

const BuildPage = ({data}:BuildPageProps ) => {
return (
    <main>
            {
                data.pageBuilder.map(block => {
                    switch(block._type) {
                        case 'hero':
                            const hb = block as HeroType;
                            return (
                                <Hero 
                                    key={hb.heading+hb.tagline}
                                    heading={hb.heading}
                                    tagline={hb.tagline}
                                    image={hb.image}
                                    alt={hb.imgAlt}
                                />
                            );
                        case 'textblock':
                            const tb = block as TextBlockType;
                            return (
                                <TextBlock
                                    key={tb.title}
                                    title={tb.title}
                                    body={tb.body}
                                />
                            );
                        case 'gallery':
                            const gb = block as ImageGalleryType;
                            return (
                                <Gallery 
                                    key={gb.title}
                                    title={gb.title}
                                    images={gb.images}
                                />
                            );
                        case 'textWithIllustration':
                            const wb = block as TextWithIllustrationType;
                            return (
                                <TextWithIllustration 
                                    key={wb.heading}
                                    heading={wb.heading}
                                    tagline={wb.tagline}
                                    excerpt={wb.excerpt}
                                    image={wb.image}
                                    alt={wb.alt}
                                />
                            );
                        default:
                            return '';
                            }
                    }
                )
            }
        </main>
)
}


export const revalidate = 3600;
const PagesPage = async ({slug}: {slug: string;}) => {
    const data = await getPage({slug});
    if (!data) return notFound();
    else  return <BuildPage data={data} />
}

export default PagesPage;