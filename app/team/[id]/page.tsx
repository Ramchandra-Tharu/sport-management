import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ClubFooter from "@/components/ClubFooter";
import Navbar from "@/components/Navbar";
import { PLAYERS } from "@/lib/players";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PLAYERS.map((player) => ({
    id: player.id,
  }));
}

export default async function PlayerProfilePage({ params }: PageProps) {
  const { id } = await params;
  const player = PLAYERS.find((p) => p.id === id);

  if (!player) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-white text-zinc-900 py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-12 w-full flex flex-col gap-8">
          
          {/* Back Button */}
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-blue-600 transition-colors w-fit group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Squad Roster
          </Link>

          {/* Player Grid Section */}
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left Column: Full Photo */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 aspect-[3/4] w-full max-w-[440px] shadow-lg group">
                <Image
                  src={player.fullImage}
                  alt={`${player.name} Full Profile`}
                  fill
                  priority
                  className="object-cover"
                />
                
                {/* Squad Jersey Badge */}
                <div className="absolute top-4 right-4 rounded-full bg-blue-600 text-white font-extrabold text-lg h-12 w-12 flex items-center justify-center shadow-lg">
                  {player.number}
                </div>
              </div>
            </div>

            {/* Right Column: Player Profile Details */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Header Title */}
              <div className="flex flex-col gap-1.5 pb-6 border-b border-zinc-200">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                  Vindhyachal FC Squad Member
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
                  {player.name}
                </h1>
                <span className="text-lg font-bold text-zinc-500">{player.position}</span>
              </div>

              {/* Personal Information */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-zinc-900">Personal Information</h2>
                <div className="grid gap-4 sm:grid-cols-2 bg-zinc-50 border border-zinc-150 rounded-2xl p-6">
                  <div className="flex justify-between sm:flex-col sm:gap-1 text-sm border-b border-zinc-200/50 pb-3 sm:border-0 sm:pb-0">
                    <span className="text-zinc-400 font-semibold">Born</span>
                    <span className="font-bold text-zinc-800">{player.personalInfo.born}</span>
                  </div>
                  <div className="flex justify-between sm:flex-col sm:gap-1 text-sm border-b border-zinc-200/50 pb-3 sm:border-0 sm:pb-0">
                    <span className="text-zinc-400 font-semibold">Nationality</span>
                    <span className="font-bold text-zinc-800">{player.personalInfo.nationality}</span>
                  </div>
                  <div className="flex justify-between sm:flex-col sm:gap-1 text-sm border-b border-zinc-200/50 pb-3 sm:border-0 sm:pb-0">
                    <span className="text-zinc-400 font-semibold">Height</span>
                    <span className="font-bold text-zinc-800">{player.personalInfo.height}</span>
                  </div>
                  <div className="flex justify-between sm:flex-col sm:gap-1 text-sm border-b border-zinc-200/50 pb-3 sm:border-0 sm:pb-0">
                    <span className="text-zinc-400 font-semibold">Weight</span>
                    <span className="font-bold text-zinc-800">{player.personalInfo.weight}</span>
                  </div>
                  <div className="flex justify-between sm:flex-col sm:gap-1 text-sm sm:col-span-2 pt-3 border-t border-zinc-200/50">
                    <span className="text-zinc-400 font-semibold">Joined Club</span>
                    <span className="font-bold text-zinc-800">{player.personalInfo.joined}</span>
                  </div>
                </div>
              </div>

              {/* Statistics Showcase */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-zinc-900">Season Statistics</h2>
                <div className="grid gap-4 grid-cols-3 bg-zinc-50 border border-zinc-150 rounded-2xl p-6 text-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-black text-blue-600">{player.stats.matches}</span>
                    <span className="text-xxs uppercase tracking-wider text-zinc-400 font-bold">Matches</span>
                  </div>
                  <div className="flex flex-col gap-1 border-x border-zinc-200">
                    <span className="text-2xl font-black text-blue-600">{player.stats.goals}</span>
                    <span className="text-xxs uppercase tracking-wider text-zinc-400 font-bold">Goals</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-black text-blue-600">{player.stats.assists}</span>
                    <span className="text-xxs uppercase tracking-wider text-zinc-400 font-bold">Assists</span>
                  </div>
                </div>

                {/* Additional Stats Details Table */}
                {player.stats.additional && (
                  <div className="border border-zinc-200 rounded-2xl overflow-hidden mt-2">
                    <table className="min-w-full divide-y divide-zinc-200 text-sm">
                      <tbody className="divide-y divide-zinc-200 bg-white">
                        {player.stats.additional.map((item, idx) => (
                          <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                            <td className="px-6 py-3.5 text-zinc-500 font-semibold">{item.label}</td>
                            <td className="px-6 py-3.5 text-right font-extrabold text-zinc-800">{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Achievements Showcase */}
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold text-zinc-900">Career Achievements</h2>
                <ul className="flex flex-col gap-3">
                  {player.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-zinc-50/50 border border-zinc-150 p-4 rounded-xl hover:border-blue-400 transition-colors">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                          stroke="currentColor"
                          className="h-3 w-3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-zinc-700 font-medium">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </main>

      <ClubFooter />
    </>
  );
}
