import React from "react";

export default function ClubHero() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 text-center bg-black">
      {/* Background Image — Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-background.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.6,
        }}
      />
      {/* Dark overlay to decrease brightness and increase text focus */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/50 to-black/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-zinc-200 uppercase backdrop-blur-sm shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Season 2026 Registration Open
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl uppercase leading-tight">
          Where passion meets <br />
          <span className="text-blue-500">excellence on the pitch</span>
        </h1>

        <p className="max-w-2xl text-lg text-zinc-300 leading-relaxed">
          Join Vindhyachal FC to develop your soccer skills with top-tier coaches, compete in national tournaments, and build lifelong athletic discipline.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-bold text-white hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/20 transition-all cursor-pointer shadow"
          >
            Join Now
          </a>
          <a
            href="/team"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer shadow-sm"
          >
            View Team
          </a>
        </div>
      </div>
    </section>
  );
}
