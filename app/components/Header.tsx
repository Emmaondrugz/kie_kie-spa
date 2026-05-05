"use client"

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleSideNav = () => {
        setIsOpen(prev => {
            const next = !prev;
            if (next) {
                const scrollY = window.scrollY;
                document.body.style.position = 'fixed';
                document.body.style.top = `-${scrollY}px`;
                document.body.style.left = '0';
                document.body.style.right = '0';
            } else {
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                document.body.style.right = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
            return next;
        });
    };

    const closeSideNav = () => {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = 'auto';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        setIsOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    // Scrolls to a section by id — works whether already on home or not
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        closeSideNav();

        if (pathname === '/') {
            // Already on home — just scroll
            setTimeout(() => scrollToSection(id), isOpen ? 300 : 0);
        } else {
            // Navigate home first, then scroll after page loads
            router.push(`/#${id}`);
        }
    };

    // On home page, handle hash on mount (for navigating from another page)
    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => scrollToSection(id), 100);
        }
    }, [pathname]);

    const WHATSAPP_NUMBER = "1234567890"; // replace with real number later
    const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

    return (
        <div className="w-full pt-3 flex text-white justify-between items-center relative z-50">
            {/* Logo */}
            <div className="flex items-center gap-3 relative z-100">
                <img src="/spa_logo.png" alt="" className="sm:w-10 w-8" />
                <div className="poppins font-light sm:text-base text-sm pt-1">
                    Kie Kie - Massage & spa
                </div>
            </div>

            {/* Desktop Nav */}
            <div className="lg:flex hidden items-center gap-7 text-sm relative z-100">
                <a href="/" onClick={(e) => handleAnchorClick(e, 'about')} className="cursor-pointer">Home</a>
                <Link href="/Packages">Packages</Link>
                <Link href="/Services">Services</Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Contact</a>
            </div>

            {/* Book Appointment button */}
            <Link href="/Appointment" className="relative z-100 py-1.5 w-fit mt-5 pl-6 pr-1.5 text-sm rounded-full lg:flex hidden gap-3 items-center">
                <div>Book Appointment</div>
                <div className="flex items-center justify-center p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#fff">
                        <path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z" />
                    </svg>
                </div>
            </Link>

            {/* Hamburger */}
            <div
                onClick={toggleSideNav}
                className="w-10 h-10 bg-white relative z-100 lg:hidden rounded-full p-2.5 flex flex-col justify-center gap-[6px] cursor-pointer"
            >
                <div className="bg-black w-full h-[2px] rounded-full"></div>
                <div className="bg-black w-full h-[2px] rounded-full"></div>
            </div>

            {isOpen && (
                <div
                    onClick={closeSideNav}
                    className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                />
            )}

            {/* Mobile Nav */}
            <div
                className={`w-full lg:hidden fixed top-20 h-[calc(100vh-80px)] z-50 bg-white transition-all duration-300 ${isOpen ? 'left-0' : '-left-full'}`}
            >
                <div className="p-5 flex flex-col h-full">

                    {/* Links */}
                    <div className="flex flex-col gap-6 text-xl">
                        <a href="/" onClick={(e) => handleAnchorClick(e, 'about')} className="text-black flex justify-between items-center">
                            Home
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#999"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z"></path></svg>
                        </a>
                        <Link href="/Services" onClick={closeSideNav} className="text-black flex justify-between items-center">
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#999"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z"></path></svg>
                        </Link>
                        <Link href="/Packages" onClick={closeSideNav} className="text-black flex justify-between items-center">
                            Packages
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#999"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z"></path></svg>
                        </Link>
                        <a href="#reviews" onClick={(e) => handleAnchorClick(e, 'reviews')} className="text-black flex justify-between items-center">
                            Reviews
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#999"><path d="M645.77-647.85 272.46-274.92q-8.31 8.3-20.88 8.11-12.58-.19-20.89-8.5-8.3-8.31-8.3-20.69t8.3-20.69L603.62-690H275.77q-12.75 0-21.38-8.63-8.62-8.63-8.62-21.38 0-12.76 8.62-21.37 8.63-8.62 21.38-8.62h393.84q15.37 0 25.76 10.39 10.4 10.4 10.4 25.76V-320q0 12.75-8.63 21.37-8.63 8.63-21.38 8.63-12.76 0-21.38-8.63-8.61-8.62-8.61-21.37v-327.85Z"></path></svg>
                        </a>
                    </div>

                    {/* CTA under links */}
                    <div className="flex flex-col max-w-[400px] w-full mx-auto mt-8 gap-4">
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-black border-2 border-gray-300 py-4 rounded-full text-center flex justify-center items-center">
                            Contact
                        </a>
                        <Link href="/Appointment" onClick={closeSideNav}>
                            <div className="bg-black text-white py-4 rounded-full text-center cursor-pointer">
                                Book Appointment
                            </div>
                        </Link>
                    </div>

                    <div className="mt-auto mb-52 pt-10">
                        <div className="max-w-[350px] w-[80%] mx-auto flex flex-col justify-center text-center gap-5">
                            <div className="text-gray-500 text-sm">
                                Relax, recharge, and enjoy your premium home massage.
                            </div>
                            <div className="flex mx-auto text-xs gap-2 py-[5px] px-[10px] items-center text-gray-400">
                                <p>© 2025 Kie Kie.</p>
                                <p>All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}