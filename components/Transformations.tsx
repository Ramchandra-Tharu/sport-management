import React from "react";
import Image from "next/image";

const TRANSFORMATIONS = [
  {
    name: "Marcus K.",
    program: "12-Week Fat Loss",
    results: "-18 lbs Fat, +4 lbs Muscle",
    beforeImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah L.",
    program: "Strength & Conditioning",
    results: "Improved mobility, +15% strength",
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "James D.",
    program: "Hypertrophy (Bulk)",
    results: "+12 lbs Lean Muscle Mass",
    beforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Transformations() {
  return (
    <section className="py-16 md:py-24 bg-dark-bg border-b border-dark-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-lime-neon">RESULTS</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Latest body transformations
            </h2>
          </div>
          <div>
            <a
              href="#pricing"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-transparent px-6 text-sm font-semibold text-zinc-900 hover:bg-dark-hover transition-colors"
            >
              View all classes
            </a>
          </div>
        </div>

        {/* Transformations List Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TRANSFORMATIONS.map((client, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-dark-border bg-dark-card overflow-hidden p-6 flex flex-col gap-6 hover:border-zinc-400 transition-colors"
            >
              {/* Before/After Split */}
              <div className="grid grid-cols-2 gap-4 aspect-[4/3] relative">
                {/* Before Image */}
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src={client.beforeImg}
                    alt={`${client.name} Before`}
                    fill
                    className="object-cover grayscale brightness-75"
                  />
                  <div className="absolute top-3 left-3 rounded bg-zinc-900/80 px-2 py-0.5 text-xxs font-extrabold text-zinc-400 uppercase tracking-widest">
                    Before
                  </div>
                </div>

                {/* After Image */}
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src={client.afterImg}
                    alt={`${client.name} After`}
                    fill
                    className="object-cover contrast-[1.05]"
                  />
                  <div className="absolute top-3 left-3 rounded bg-lime-neon px-2 py-0.5 text-xxs font-extrabold text-dark-bg uppercase tracking-widest">
                    After
                  </div>
                </div>
              </div>

              {/* Client Info / Results */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-bold text-zinc-900">{client.name}</h3>
                  <span className="text-xs text-lime-neon font-semibold">{client.program}</span>
                </div>
                <p className="text-sm text-zinc-600 font-medium mt-1">
                  {client.results}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
