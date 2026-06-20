"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-blue-950/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 overflow-hidden transition-transform group-hover:scale-105">
            <Image
              src="/logo-removebg-preview.png"
              alt="Vindhyachal FC Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black tracking-tight text-white uppercase">
            Vindhyachal <span className="text-amber-400">FC</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Team", href: "/team" },
            { name: "Gallery", href: "/gallery" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-amber-50/85 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <a
            href="#login"
            className="inline-flex h-10 items-center justify-center rounded-full border border-amber-700 bg-amber-950/40 px-5 text-sm font-bold text-amber-100 hover:bg-amber-600 hover:text-white hover:border-amber-400 transition-all cursor-pointer shadow-inner"
          >
            Login
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-blue-900 text-amber-100 hover:bg-blue-900/50 md:hidden transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full border-b border-blue-900 bg-blue-950 px-6 py-6 shadow-2xl md:hidden transition-all duration-200">
          <nav className="flex flex-col gap-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Team", href: "/team" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-bold text-amber-50/90 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full border border-amber-800 bg-amber-950/40 text-base font-bold text-amber-100 hover:bg-amber-800 hover:text-white text-center"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
