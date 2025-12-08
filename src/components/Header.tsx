"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";

const navLinks = [
    { label: "ABOUT", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "EXPERIENCE", href: "/projects" },
    { label: "THE TEAM", href: "/team" },
    { label: "CONTACT", href: "#contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY;
            setScrolled(current > 10);

            // Hide on scroll down, show on scroll up
            if (current > lastScroll + 5 && current > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setLastScroll(current);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScroll]);

    const baseBg = scrolled ? "bg-white text-[#444444] shadow-md" : "bg-[#444444] text-white";
    const navText = scrolled ? "text-[#444444]" : "text-white";

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 px-16 py-6 w-full font-serif text-base font-normal transition-all duration-300 ${baseBg} ${
                    hidden ? "-translate-y-full" : "translate-y-0"
                }`}
            >
                <div className="flex flex-row justify-between items-center">
                    <Link href="/" aria-label="Home">
                        <Image src="/logo.webp" alt="Logo" width={220} height={44} priority />
                    </Link>

                    <nav className={`flex flex-row gap-10 items-center ${navText}`}>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || 
                                           (link.href === "/" && pathname === "/") ||
                                           (link.href !== "/" && link.href !== "#contact" && pathname.startsWith(link.href));
                            
                            if (link.href === "#contact") {
                                return (
                                    <button
                                        key={link.href}
                                        onClick={() => setIsContactModalOpen(true)}
                                        className={`transition-colors duration-200 hover:text-[#E68126]`}
                                    >
                                        {link.label}
                                    </button>
                                );
                            }
                            
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`transition-colors duration-200 hover:text-[#E68126] ${
                                        isActive ? "text-[#E68126]" : ""
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </header>
            
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}