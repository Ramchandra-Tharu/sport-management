"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ClubFooter from "@/components/ClubFooter";
import { PLAYERS, Player } from "@/lib/players";

const POSITIONS = ["All Players", "Goalkeeper", "Defender", "Midfielder", "Forward"] as const;

type FilterType = (typeof POSITIONS)[number] | "All Players";

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All Players");

  const filteredPlayers = activeFilter === "All Players"
    ? PLAYERS
    : PLAYERS.filter((player) => player.position === activeFilter);

  return (
    <>
      <Navbar />

      <main className="flex-1 flex flex-col bg-white text-zinc-900">
        
        {/* Team Banner */}
        <section className="relative h-[250px] md:h-[350px] flex items-center justify-center bg-black text-center">
          {/* Background — Parallax */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/background.png')",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: 0.6,
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/70" />
          
          <div className="relative z-10 px-6 md:px-12 flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              SQUAD ROSTER
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl uppercase">
              First Team Squad
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto">
              Meet the athletes representing Vindhyachal FC in the current campaign.
            </p>
          </div>
        </section>

        {/* Roster Listing & Filters */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {POSITIONS.map((pos) => {
                const isActive = activeFilter === pos || (activeFilter === "All Players" && pos === "All Players");
                return (
                  <button
                    key={pos}
                    onClick={() => setActiveFilter(pos)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10"
                        : "border-zinc-200 bg-white text-zinc-600 hover:text-zinc-900 hover:border-zinc-400"
                    }`}
                  >
                    {pos === "All Players" ? "All Players" : `${pos}s`}
                  </button>
                );
              })}
            </div>

            {/* Players Roster Grid */}
            {filteredPlayers.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {filteredPlayers.map((player) => (
                  <Link
                    key={player.id}
                    href={`/team/${player.id}`}
                    className="rounded-3xl border border-zinc-200 bg-white overflow-hidden p-5 flex flex-col gap-5 hover:border-blue-500 hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Player Image wrapper */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-150">
                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      
                      {/* Jersey Squad Number Badge */}
                      <div className="absolute top-3 right-3 rounded-full bg-blue-600 text-white font-extrabold text-xs h-8 w-8 flex items-center justify-center shadow">
                        {player.number}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-base font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {player.name}
                      </h3>
                      <div className="flex justify-between items-center text-xs font-semibold text-zinc-500">
                        <span>{player.position}</span>
                        <span>Age: {player.age}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <span className="text-lg text-zinc-400 font-bold">No players found in this category.</span>
              </div>
            )}

          </div>
        </section>

      </main>

      <ClubFooter />
    </>
  );
}
