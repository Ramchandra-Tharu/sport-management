import React from "react";
import Image from "next/image";

export default function ClubHero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden bg-black">

      {/* Full-width background football field image */}
      <Image
        src="/hero-background.png"
        alt="Football field with players"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Left-side darker overlay so text pops */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content — left aligned */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 pt-20">
        <div className="flex flex-col gap-6 max-w-xl">

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 w-fit rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Season 2026 Open
          </div>

          {/* Big stacked headline */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase leading-[0.92] drop-shadow-lg">
            Train.<br />
            Grow.<br />
            Succeed.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-sm">
            Professional football coaching for ages 6–18. Small groups, top-level mentors, and player development programs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 h-12 rounded-full bg-white px-7 text-sm font-extrabold text-[#1a2e1a] hover:bg-white/90 hover:scale-[1.02] transition-all shadow-lg"
            >
              Book a Trial
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a
              href="/team"
              className="inline-flex items-center gap-2 h-12 rounded-full border border-white/40 bg-white/10 px-7 text-sm font-extrabold text-white backdrop-blur-sm hover:bg-white/20 hover:scale-[1.02] transition-all"
            >
              View Programs
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <div className="h-8 w-[1.5px] bg-white/30 rounded-full" />
        <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Scroll</span>
      </div>
    </section>
  );
}
