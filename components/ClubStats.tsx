import React from "react";

const STATS = [
  { label: "Total Active Players", value: "350+" },
  { label: "Tournaments Played", value: "45+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Certified Coaches", value: "18" },
];

export default function ClubStats() {
  return (
    <section className="py-12 bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-blue-200 transition-colors">
              <span className="text-4xl font-extrabold text-blue-600 tracking-tight md:text-5xl">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-zinc-500 mt-2 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
