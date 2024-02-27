
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "sanity";

type TextBlockProps = {
    title?: string;
    body: PortableTextBlock[];
}

const TextBlock = ({title,body}: TextBlockProps) => {

    const bodyText = body ? <PortableText value={body} /> : 'Nothing here yet.';
    return (
        <section>
            {bodyText}
        </section>
    )
}

export default TextBlock;