import React from "react";

const MATCHES = [
  {
    opponent: "Vanguard United",
    logoText: "VU",
    date: "June 24, 2026",
    time: "4:30 PM",
    venue: "Vindhyachal FC Arena (Home)",
    type: "League Match",
    isHome: true,
  },
  {
    opponent: "Apex City FC",
    logoText: "AC",
    date: "July 01, 2026",
    time: "6:00 PM",
    venue: "Metropolitan Sports Stadium (Away)",
    type: "State Cup Finals",
    isHome: false,
  },
  {
    opponent: "Tidal Waves Soccer",
    logoText: "TW",
    date: "July 08, 2026",
    time: "3:00 PM",
    venue: "Vindhyachal FC Arena (Home)",
    type: "League Match",
    isHome: true,
  },
];

export default function UpcomingMatches() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              FIXTURES
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Upcoming Match Schedule
            </h2>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-md cursor-pointer"
            >
              Get Tickets
            </a>
          </div>
        </div>

        {/* Matches Stack */}
        <div className="flex flex-col gap-6">
          {MATCHES.map((match, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm"
            >
              {/* Fixture details (Teams) */}
              <div className="flex items-center gap-6 flex-1">
                {/* Home Team */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    VFC
                  </div>
                  <span className="text-base font-extrabold text-zinc-900">Vindhyachal FC</span>
                </div>

                {/* VS Tag */}
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-3 py-1 rounded bg-zinc-200">
                  VS
                </span>

                {/* Away Team */}
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white font-bold">
                    {match.logoText}
                  </div>
                  <span className="text-base font-extrabold text-zinc-900">{match.opponent}</span>
                </div>
              </div>

              {/* Match Timing */}
              <div className="flex flex-col gap-1 md:items-center">
                <span className="text-sm font-bold text-zinc-800">{match.date}</span>
                <span className="text-xs text-zinc-500 font-semibold">{match.time}</span>
              </div>

              {/* Venue details */}
              <div className="flex flex-col gap-1 md:items-end">
                <span className="text-sm font-semibold text-zinc-700">{match.venue}</span>
                <span className={`text-xxs font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded w-fit ${
                  match.isHome ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"
                }`}>
                  {match.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
