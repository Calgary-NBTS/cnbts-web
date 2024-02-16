import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

function Button({children}:Props) {
    return (
        <div className="m-1 p-2 border border-solid border-black bg-purple-500 hover:bg-purple-400">{children}</div>
    )
}

export default function Header() {
    return (
        <div className="flex w-full bg-purple-700 text-black">
            <Link href="/events"><Button>Events</Button></Link>
            <Link href="/newsletter"><Button>Newsletter</Button></Link>
            <Link href="/resources"><Button>Resources</Button></Link>
            <Link href="/about"><Button>About</Button></Link>
        </div>
    )
}