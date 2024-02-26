import { getPage } from "@/sanity/queries";
import Hero from "./Hero";



const PagesPage = async ({slug}: {slug: string;}) => {
    const data = await getPage({slug});


    return (
        <main>
            {
                data[0].pageBuilder.map(block => {
                    switch(block._type) {
                        case 'hero':
                            return (
                                <Hero 
                                    key={block._id}
                                    heading={block.heading}
                                    tagline={block.tagline}
                                    image={block.image}
                                    alt={block.imgAlt}
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