
import { PortableTextBlock } from "sanity";
import PortableTextComponent from "./PortableTextCompoent";

type TextBlockProps = {
    title?: string;
    body: PortableTextBlock[];
}

const TextBlock = ({title,body}: TextBlockProps) => {

    const bodyText = body 
        ? <PortableTextComponent value={body} /> 
        : 'Nothing here yet.';
    return (
        <section>
            {bodyText}
        </section>
    )
}

export default TextBlock;