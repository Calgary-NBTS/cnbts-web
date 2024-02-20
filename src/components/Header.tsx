'use client'
import { useState } from 'react';
import Link from 'next/link';
import { IoClose, IoMenu } from "react-icons/io5";
import {useMediaQuery} from 'react-responsive';
import Button from './MenuButton'
import './css/Header.css';

type renderNavProps = {
    mobile: boolean;
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        if (isMobile) {
            setIsOpen(false);
        }
    }

    const RenderNav = ({mobile}: renderNavProps) => {
        return (
                <nav className={isMobile ? 'pt-4 w-4/5' : ''}> 
                    <ul className={`flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
                        {!isMobile && (
                            <li>
                                <Link href="/" onClick={closeMenu}>
                                    <Button>Home</Button>
                                </Link>
                            </li>
                        )}
                        
                        <li>
                            <Link href="/events" onClick={closeMenu}>
                                <Button>Events</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/newsletter" onClick={closeMenu}>
                                <Button>News</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources" onClick={closeMenu}>
                                <Button>Resources</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={closeMenu}>
                                <Button>About</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin" onClick={closeMenu}>
                                <Button>Admin</Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
        )
    }

    return (
        <header className="fixed w-full bg-gradient-to-b from-sky-300 to-sky-400">
            <div className="mobileBar p-2 flex justify-between">
                <div onClick={toggleMenu} className="text-3xl">
                    {isOpen ? <IoClose /> : <IoMenu />}
                </div>
                <div>
                    <Link href="/" onClick={closeMenu}>Calgary NBTS</Link>
                </div>
            </div>
            
            {(!isMobile || (isMobile && isOpen)) &&
                <RenderNav mobile={isMobile} />
            }
        </header>
    )
}