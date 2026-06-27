import React from "react";
import Image from "next/image";

export default function ClubAbout() {
  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-24 bg-zinc-50 border-t border-b border-zinc-200">
      {/* Background Image Watermark — Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/about-background.jpeg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          opacity: 0.15,
        }}
      />
      {/* Soft light overlay */}
      <div className="absolute inset-0 z-0 bg-white/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Image */}
          <div className="relative lg:col-span-6 flex justify-center">
            {/* Background design borders */}
            <div className="absolute inset-0 -m-4 rounded-3xl border border-blue-500/20 -z-10 hidden sm:block transform rotate-1" />
            <div className="absolute inset-0 -m-4 rounded-3xl border border-zinc-200 -z-20 hidden sm:block transform -rotate-1" />

            <div className="overflow-hidden rounded-3xl border border-zinc-250 aspect-[4/3] w-full max-w-[500px] shadow-lg relative group">
              <Image
                src="/practice/WhatsApp Image 2026-06-23 at 1.19.50 PM.jpeg"
                alt="Vindhyachal FC — U17 7-a-side Tournament at Bhopal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              ABOUT OUR CLUB
            </span>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              A Home for Football in Mandideep
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed">
              Our club was started with the aim of giving young players in Mandideep a place to learn, improve, and enjoy football. We believe that with the right guidance, hard work, and opportunities, local talent can reach much bigger stages.
            </p>

            <p className="text-sm text-zinc-500 leading-relaxed">
              Through regular training sessions, friendly matches, and tournaments, we help players develop their skills while building confidence, discipline, and teamwork. Our goal is not only to grow the football culture in Mandideep but also to help talented players take the next step towards district, state, and national-level football.
            </p>

            <div>
              <a
                href="/about"
                className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-transparent px-6 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 hover:border-zinc-400 transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
