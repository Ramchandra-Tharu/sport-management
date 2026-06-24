import React from "react";
import Image from "next/image";

export default function ClubFooter() {
  return (
    <footer id="contact" className="bg-white border-t border-zinc-200 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative h-9 w-9 overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/logo-removebg-preview.png"
                  alt="Vindhyachal FC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-zinc-900 uppercase">
                Vindhyachal <span className="text-blue-600">FC</span>
              </span>
            </a>
            
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              Vindhyachal FC is a registered youth soccer club committed to establishing high-quality athletics training programs, discipline, and community development.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  name: "Facebook",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                  link: "https://www.facebook.com/search/top?q=vindhyachal%20football%20club%20mandideep",
                },
                {
                  name: "YouTube",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 3 11.75s0 0 0 0h0c.46 5.33 2.78 19 2.78 19h0" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                    </svg>
                  ),
                  link: "#",
                },
                {
                  name: "Instagram",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ),
                  link: "https://www.instagram.com/vindhyachal.fc",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 hover:text-blue-600 hover:border-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Navigation</h4>
            <nav className="flex flex-col gap-3.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Club", href: "/about" },
                { name: "Squad Roster", href: "/team" },
                { name: "Photo Gallery", href: "/gallery" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact and Location details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Club Headquarters</h4>
            
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-zinc-250 bg-zinc-50 p-4 flex flex-col gap-1">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Stadium Location</span>
                <span className="text-sm font-semibold text-zinc-800">
                  Bade Ground, Mandideep, Madhya Pradesh, India
                </span>
              </div>

              <div className="rounded-2xl border border-zinc-250 bg-zinc-50 p-4 flex flex-col gap-1">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Telephone Contact</span>
                <a
                  href="tel:+917772841392"
                  className="text-sm font-bold text-zinc-800 hover:text-blue-600 transition-colors w-fit"
                >
                  +91 7772841392
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* copyright and attribution */}
        <div className="h-px bg-zinc-200 w-full mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <span>&copy; {new Date().getFullYear()} Vindhyachal FC. All rights reserved.</span>
          <span>Designed for modern soccer clubs. Recreated in React & Next.js.</span>
        </div>
      </div>
    </footer>
  );
}
