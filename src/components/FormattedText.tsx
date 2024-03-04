import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "sanity";
import Link from "next/link";

const components: PortableTextComponents = {
    types: {
        //h3: ({value}:any) => <h3 className='text-xl'>{value.text}</h3>,
    },
    marks: {
        em: ({children}) => <em className='italic'>{children}</em>,
        strong: ({children}) => <strong className='font-semibold'>{children}</strong>,
        link: ({children, value}) => {
            const rel = !value.href.startsWith('/') ? 'noreferer noopener' : undefined;

            if (rel)
                return <a className='text-blue-600 hover:text-blue-400' href={value.href} target='_blank' rel={rel}>{children}</a>
            else
                return <Link className='text-blue-600 hover:text-blue-400' href={value.href}>{children}</Link>
        }
    },
    block: {
        h1: ({children}) => <h1 className='text-4xl'>{children}</h1>,
        h2: ({children}) => <h2 className='text-3xl'>{children}</h2>,
        h3: ({children}) => <h3 className='text-2xl'>{children}</h3>,
        h4: ({children}) => <h4 className='text-xl'>{children}</h4>,
        blockquote: ({children}) => (
            <blockquote className='p-4 mx-4 border-l-4 border-purple-600 bg-white bg-opacity-50'>
                <p className="italic leading-relaxed">
                    {children}
                </p>
            </blockquote>
        ),
    },
    list: {
        bullet: ({children}) => <ul className='mt-4 list-disc'>{children}</ul>,
        number: ({children}) => <ol className='mt-3 list-decimal'>{children}</ol>,
    },
    listItem: {
        bullet: ({children}) => <li className='ml-6'>{children}</li>,
        number: ({children}) => <li className='ml-4'>{children}</li>,
    }
}

const FormattedText = ({value}: {value: PortableTextBlock[];}) => {
    return <PortableText value={value} components={components}/>
}

export default FormattedText;