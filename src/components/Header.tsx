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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 py-4 md:py-6 w-full font-serif text-base font-normal transition-all duration-300 ${baseBg} ${
                    hidden ? "-translate-y-full" : "translate-y-0"
                }`}
            >
                <div className="flex flex-row justify-between items-center">
                    <Link href="/" aria-label="Home">
                        <Image src="/logo.webp" alt="Logo" width={220} height={44} priority className="w-40 md:w-52 lg:w-[220px] h-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={`hidden lg:flex flex-row gap-6 xl:gap-10 items-center ${navText}`}>
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

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 ${navText}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className={`lg:hidden mt-4 pb-4 flex flex-col gap-4 ${navText}`}>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || 
                                           (link.href === "/" && pathname === "/") ||
                                           (link.href !== "/" && link.href !== "#contact" && pathname.startsWith(link.href));
                            
                            if (link.href === "#contact") {
                                return (
                                    <button
                                        key={link.href}
                                        onClick={() => {
                                            setIsContactModalOpen(true);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`text-left transition-colors duration-200 hover:text-[#E68126] py-2`}
                                    >
                                        {link.label}
                                    </button>
                                );
                            }
                            
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`transition-colors duration-200 hover:text-[#E68126] py-2 ${
                                        isActive ? "text-[#E68126]" : ""
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                )}
            </header>
            
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}