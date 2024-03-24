
import { PortableTextBlock } from "sanity";
import FormattedText from "./FormattedText";

type TextBlockProps = {
    title?: string;
    body: PortableTextBlock[];
}

const TextBlock = ({title,body}: TextBlockProps) => {

    const bodyText = body 
        ? <FormattedText value={body} /> 
        : 'Nothing here yet.';
    return (
        <section className='sm:ml-2 md:ml-4 lg:ml-10 lg:w-8/12 xl:ml-20 xl:w-8/12'>
            {bodyText}
        </section>
    )
}

export default TextBlock;