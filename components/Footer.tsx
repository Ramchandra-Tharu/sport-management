import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark-bg py-16 border-t border-dark-border/40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 mb-16">
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-lime-neon text-zinc-900 transition-transform group-hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6.5 6.5 11 11" />
                  <path d="m21 21-1-1" />
                  <path d="m3 3 1 1" />
                  <path d="m18.5 5.5 3 3" />
                  <path d="m2.5 15.5 3 3" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-lime-neon">
                FitCoach
              </span>
            </a>
            
            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
              Transform your body with expert guidance and personalized training programs designed to fit your goals and schedule.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {[
                {
                  name: "Facebook",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                  link: "#",
                },
                {
                  name: "YouTube",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
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
                  link: "#",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-border text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Pages Link */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Pages</h4>
            <nav className="flex flex-col gap-3.5">
              {["Home", "About", "Classes", "Blog", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Utility Links */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Utility</h4>
            <nav className="flex flex-col gap-3.5">
              {["Packages", "Privacy Policy", "Error 404"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors w-fit"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact details */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Begin your journey</h4>
            
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-dark-border bg-dark-card p-4 flex flex-col gap-1.5">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Feel free to call me</span>
                <a
                  href="tel:+917772841392"
                  className="text-sm font-bold text-zinc-900 hover:text-lime-neon transition-colors w-fit"
                >
                  +91 7772841392
                </a>
              </div>

              <div className="rounded-2xl border border-dark-border bg-dark-card p-4 flex flex-col gap-1.5">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Email me on</span>
                <a
                  href="mailto:vindhyachalfootballclub@gmail.com"
                  className="text-sm font-bold text-zinc-900 hover:text-lime-neon transition-colors w-fit"
                >
                  vindhyachalfootballclub@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="h-px bg-dark-border w-full mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <span>&copy; {new Date().getFullYear()} FitCoach. All rights reserved.</span>
          <span className="flex gap-1 items-center">
            Designed by Salim from Webestica. Recreated in React & Next.js.
          </span>
        </div>
      </div>
    </footer>
  );
}
