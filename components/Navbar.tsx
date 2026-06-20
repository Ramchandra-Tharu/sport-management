"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#1a2e1a]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">

        {/* Logo + Club Name */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative h-14 w-14 rounded-full bg-white/10 flex items-center justify-center overflow-hidden ring-2 ring-white/25 group-hover:ring-white/50 transition-all">
            <Image
              src="/logo-removebg-preview.png"
              alt="Vindhyachal FC Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-base font-extrabold tracking-[0.2em] text-white/60 uppercase">Vindhyachal</span>
            <span className="text-3xl font-black tracking-widest text-white uppercase">FC Academy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 h-10 rounded-full bg-white px-5 text-sm font-bold text-[#1a2e1a] hover:bg-white/90 transition-all duration-200 shadow"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-white/40 md:hidden transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#1a2e1a] border-t border-white/10 px-6 py-5">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold border-b border-white/10 pb-3 transition-colors ${
                  pathname === link.href ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 h-10 rounded-full bg-white text-sm font-bold text-[#1a2e1a] hover:bg-white/90 transition-all"
            >
              Contact Us ↗
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
