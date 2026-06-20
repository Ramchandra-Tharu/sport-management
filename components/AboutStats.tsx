import React from "react";

export default function AboutStats() {
  return (
    <section id="about" className="py-16 md:py-24 bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Big Stats Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Stat Box 1 */}
            <div className="rounded-3xl border border-dark-border bg-dark-card p-8 flex flex-col gap-2 relative group hover:border-lime-neon/30 transition-all">
              <span className="text-5xl font-extrabold text-lime-neon tracking-tight md:text-6xl">14+</span>
              <span className="text-lg font-semibold text-zinc-700">Years of experience</span>
              <div className="absolute right-6 bottom-6 text-zinc-200 group-hover:text-lime-neon/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
            </div>

            {/* Stat Box 2 */}
            <div className="rounded-3xl border border-dark-border bg-dark-card p-8 flex flex-col gap-2 relative group hover:border-lime-neon/30 transition-all">
              <span className="text-5xl font-extrabold text-lime-neon tracking-tight md:text-6xl">190+</span>
              <span className="text-lg font-semibold text-zinc-700">Clients trusted my guidance</span>
              <div className="absolute right-6 bottom-6 text-zinc-200 group-hover:text-lime-neon/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Center Column: Heading & Paragraph */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-wider text-lime-neon">WHO I AM</span>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Experienced personal trainer
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed">
              My approach combines science-backed training methods with personalized workout plans tailored to your specific goals — whether building muscle, losing weight, or improving overall health.
            </p>

            <div>
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-transparent px-6 text-sm font-semibold text-zinc-900 hover:bg-dark-hover transition-colors"
              >
                Get to know me
              </a>
            </div>
          </div>

          {/* Right Column: Certifications Checklist */}
          <div className="lg:col-span-3 rounded-3xl border border-dark-border bg-dark-card p-8">
            <h3 className="text-xl font-bold text-zinc-900 mb-6">Certifications</h3>
            <ul className="flex flex-col gap-4">
              {[
                "Certified personal trainer",
                "Nutrition specialist",
                "Strength and conditioning coach",
              ].map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-neon/20 text-lime-neon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-700 leading-snug">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
