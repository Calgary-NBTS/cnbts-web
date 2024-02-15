import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex w-full bg-purple-200 text-black">
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
        </div>
    )
}