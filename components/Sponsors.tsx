import React from "react";

const SPONSORS = [
  { name: "Apex Sports", symbol: "▲" },
  { name: "Velo Energy", symbol: "⚡" },
  { name: "Novum Tech", symbol: "◆" },
  { name: "Atlas Logistics", symbol: "■" },
  { name: "Prime Hydration", symbol: "●" },
];

export default function Sponsors() {
  return (
    <section className="py-12 bg-white border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h3 className="text-center text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-8">
          Our Official Sponsors & Partners
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {SPONSORS.map((sponsor, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-zinc-400 hover:text-blue-600 transition-colors duration-300 cursor-default group"
            >
              {/* Logo icon */}
              <span className="text-2xl font-bold group-hover:scale-110 transition-transform">
                {sponsor.symbol}
              </span>
              {/* Brand name */}
              <span className="text-base font-black tracking-tight uppercase">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
