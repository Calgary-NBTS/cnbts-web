import { getPage } from "@/sanity/queries";
import Hero from "./Hero";
import TextBlock from "./TextBlock";
import Gallery from './Gallery';
import { HeroType, TextBlockType, ImageGalleryType } from "@/sanity/types/queryTypes";

const PagesPage = async ({slug}: {slug: string;}) => {
    const data = await getPage({slug});

    return (
        <main>
            {
                data[0].pageBuilder.map(block => {
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
                            )
                        case 'textblock':
                            const tb = block as TextBlockType;
                            return (
                                <TextBlock
                                    key={tb.title}
                                    title={tb.title}
                                    body={tb.body}
                                />
                            )
                        case 'gallery':
                            const gb = block as ImageGalleryType;
                            return (
                                <Gallery 
                                    key={gb.title}
                                    title={gb.title}
                                    images={gb.images}
                                />
                            )
                        default:
                            return '';
                            }
                    }
                )
            }
        </main>
    )
}

export default PagesPage;