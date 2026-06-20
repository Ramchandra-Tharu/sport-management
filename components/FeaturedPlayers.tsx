import React from "react";

const PLAYERS = [
  {
    name: "Lucas Martinez",
    position: "Forward (Striker)",
    goals: "22 Goals",
    assists: "8 Assists",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=400",
    number: "#9",
  },
  {
    name: "Elena Rostova",
    position: "Midfielder (Playmaker)",
    goals: "12 Goals",
    assists: "19 Assists",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=400",
    number: "#10",
  },
  {
    name: "Marcus Sterling",
    position: "Goalkeeper",
    goals: "0 Goals (15 Clean Sheets)",
    assists: "2 Assists",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400",
    number: "#1",
  },
];

export default function FeaturedPlayers() {
  return (
    <section id="team" className="relative overflow-hidden py-16 md:py-24 bg-zinc-50 border-t border-b border-zinc-200">
      {/* Background Image Watermark — Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.15,
        }}
      />
      {/* Soft light overlay */}
      <div className="absolute inset-0 z-0 bg-white/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            ROSTER
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Featured Active Players
          </h2>
          <p className="text-zinc-500 text-base">
            Meet the top goal-scorers and standouts leading Vindhyachal FC to success in the current season league tables.
          </p>
        </div>

        {/* Players Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {PLAYERS.map((player, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-zinc-200 bg-white overflow-hidden p-6 flex flex-col gap-6 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
            >
              {/* Player Image with Squad Number */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* squad number badge */}
                <div className="absolute top-4 right-4 rounded-full bg-blue-600 text-white font-extrabold text-sm h-9 w-9 flex items-center justify-center shadow-md">
                  {player.number}
                </div>
              </div>

              {/* Player metadata */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {player.name}
                  </h3>
                  <span className="text-xs text-zinc-500 font-semibold">{player.position}</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-zinc-100 w-full my-2.5" />

                {/* Goals and Assists stats row */}
                <div className="flex justify-between items-center text-sm font-bold">
                  <div className="flex flex-col">
                    <span className="text-xxs uppercase tracking-wider text-zinc-400">Goals</span>
                    <span className="text-zinc-800">{player.goals}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-xxs uppercase tracking-wider text-zinc-400">Assists</span>
                    <span className="text-zinc-800">{player.assists}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
