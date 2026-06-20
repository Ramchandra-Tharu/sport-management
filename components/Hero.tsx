import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 -z-10 h-72 w-72 rounded-full bg-lime-neon/5 blur-3xl" />
      <div className="absolute top-10 right-1/4 -z-10 h-96 w-96 rounded-full bg-green-tint/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-dark-border bg-dark-card px-4 py-1.5 text-sm font-semibold tracking-wide text-zinc-700">
              <span className="h-2 w-2 rounded-full bg-lime-neon animate-pulse" />
              HI, I&apos;M MIKE
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl leading-[1.15]">
              Your <span className="text-lime-neon">fitness trainer</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              Transform your body and mind with personalized workout plans designed for your goals. 
              Reach new heights with targeted training programs built around your progress.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-lime-neon px-8 text-base font-bold text-zinc-900 hover:scale-[1.02] hover:shadow-lg hover:shadow-lime-neon/15 transition-all"
              >
                Get started
              </a>
              <a
                href="#pricing"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-transparent px-8 text-base font-bold text-zinc-900 hover:bg-dark-hover transition-colors"
              >
                Explore packages
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="relative lg:col-span-6 xl:col-span-5 flex justify-center">
            {/* Outline box effect */}
            <div className="absolute inset-0 -m-4 rounded-3xl border border-lime-neon/20 -z-10 hidden sm:block transform rotate-1" />
            <div className="absolute inset-0 -m-4 rounded-3xl border border-dark-border -z-20 hidden sm:block transform -rotate-1" />

            <div className="overflow-hidden rounded-3xl border border-dark-border bg-dark-card aspect-[4/5] w-full max-w-[420px] shadow-2xl relative group">
              <Image
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800"
                alt="Mike - Fitness Trainer"
                width={800}
                height={1000}
                priority
                className="h-full w-full object-cover grayscale brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
