import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import Link from 'next/link';
import MaterialLink from '@mui/material/Link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Typography from '@mui/material/Typography';


const components: PortableTextComponents = {
    types: {
        //h3: ({value}:any) => <h3 className='text-xl'>{value.text}</h3>,
    },
    marks: {
        em: ({ children }) => <em className='italic'>{children}</em>,
        strong: ({ children }) => <strong className='font-semibold'>{children}</strong>,
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferer noopener' : undefined;

            if (rel)
                return (
                    <MaterialLink component='a' href={value.href} target='_blank' rel={rel}>
                        {children} <Typography component='span' sx={{fontSize: 'xx-small'}}><FaExternalLinkAlt /></Typography>
                    </MaterialLink>
                )
            else
                return <MaterialLink component={Link} href={value.href}>{children}<FaExternalLinkAlt />
                </MaterialLink>
        }
    },
    block: {
        h1: ({ children }) => <Typography variant='h1' component='h1'>{children}</Typography>,
        h2: ({ children }) => <Typography variant='h2' component='h2'>{children}</Typography>,
        h3: ({ children }) => <Typography variant='h3' component='h3'>{children}</Typography>,
        h4: ({ children }) => <Typography variant='h4' component='h4'>{children}</Typography>,
        blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    },
    list: {
        bullet: ({ children }) => <ul className='mt-4 list-disc'>{children}</ul>,
        number: ({ children }) => <ol className='mt-3 list-decimal'>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className='ml-6'>{children}</li>,
        number: ({ children }) => <li className='ml-4'>{children}</li>,
    },
}

const FormattedText = ({value}: {value: PortableTextBlock[];}) => {
    return <PortableText value={value} components={components} />
}

export default FormattedText;