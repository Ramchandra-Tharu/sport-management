"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-blue-950/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">

        {/* Logo + Club Name */}
        <a href="/" className="flex items-center gap-3 group">
          {/* Logo with white backdrop */}
          <div className="relative h-14 w-14 overflow-visible">
            <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-md scale-125 group-hover:bg-amber-400/45 transition-all duration-300" />
            <div className="relative h-14 w-14 rounded-full bg-white ring-2 ring-amber-400/70 group-hover:ring-amber-400 transition-all duration-300 shadow-[0_0_18px_rgba(251,191,36,0.45)] flex items-center justify-center overflow-hidden">
              <Image
                src="/logo-removebg-preview.png"
                alt="Vindhyachal FC Logo"
                fill
                className="object-contain p-1 scale-90 group-hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Club name */}
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-widest text-white uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_0_14px_rgba(251,191,36,0.6)] transition-all duration-300">
              Vindhyachal
            </span>
            <span className="text-lg font-extrabold tracking-[0.3em] text-amber-400 uppercase drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
              FC
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-bold transition-colors duration-200 group/link ${
                pathname === link.href
                  ? "text-amber-400"
                  : "text-white/80 hover:text-amber-400"
              }`}
            >
              {link.name}
              {/* Animated underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-amber-400 transition-all duration-300 shadow-[0_0_8px_rgba(251,191,36,0.8)] ${
                  pathname === link.href ? "w-full" : "w-0 group-hover/link:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <a
            href="#login"
            className="relative inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-bold text-amber-300 border border-amber-400/50 overflow-hidden group/btn transition-all duration-300 hover:text-white hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
          >
            <span className="absolute inset-0 bg-amber-500 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            <span className="relative z-10">Login</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-amber-400/60 hover:text-amber-400 md:hidden transition-all duration-200 backdrop-blur-sm cursor-pointer"
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-blue-950/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-bold transition-colors border-b border-white/5 pb-3 ${
                  pathname === link.href ? "text-amber-400" : "text-white/80 hover:text-amber-400"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full border border-amber-400/50 bg-amber-500/10 text-base font-bold text-amber-300 hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
