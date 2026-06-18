import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ClubFooter from "@/components/ClubFooter";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 flex flex-col bg-white text-zinc-900">
        
        {/* 1. Banner Image Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-black text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200"
              alt="Football Stadium Banner"
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
          </div>
          
          <div className="relative z-10 px-6 md:px-12 flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              STRICKER FC ACADEMY
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl uppercase">
              About Our Club
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto">
              A legacy of athletic training, team spirit, and championship soccer on the pitch since 2011.
            </p>
          </div>
        </section>

        {/* 2. Club History Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  ESTABLISHED 2011
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                  Our Journey and Heritage
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Striker FC was founded by a coalition of certified youth coaches and ex-professional athletes who wanted to design a premier soccer development structure in the region. What started with just two junior rosters has grown into a prestigious soccer academy.
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Over the past decade, we have established professional-grade training methodologies, scouted high-tier athletes, and built state-of-the-art facilities. Our commitment is to foster team collaboration, personal growth, and sports integrity.
                </p>
              </div>

              {/* History Timeline Side */}
              <div className="lg:col-span-6 flex flex-col gap-6 p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900">Key Milestones</h3>
                <div className="flex flex-col gap-6">
                  {[
                    { year: "2011", title: "Club Foundations", desc: "Formed with U10 and U12 rosters competing in regional youth leagues." },
                    { year: "2016", title: "Academy Turf Complex", desc: "Constructed our own turf pitches and sports facilities." },
                    { year: "2021", title: "National Level Showcase", desc: "Advanced junior and senior rosters to division finals and state championships." },
                    { year: "2026", title: "Elite Pathway Launch", desc: "Initiated collegiate scout relationships and Beckham Technical Director alliance." }
                  ].map((milestone, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-base font-extrabold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg">
                        {milestone.year}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900">{milestone.title}</h4>
                        <p className="text-xs text-zinc-500 mt-1 leading-normal">{milestone.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision Section */}
        <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-8 md:grid-cols-2">
              
              {/* Mission Card */}
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 flex flex-col gap-4 shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900">Our Mission</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  To identify, nurture, and prepare young soccer athletes for the next levels of competition, whilst instilling critical lifestyle disciplines of leadership, physical conditioning, sports integrity, and cooperative team values.
                </p>
              </div>

              {/* Vision Card */}
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 flex flex-col gap-4 shadow-sm hover:border-blue-400 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900">Our Vision</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  To establish Striker FC as the nation&apos;s leading grassroots soccer training academy, serving as a trusted feeder network for college athletic recruitment divisions and professional MLS league scouts.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Coaching Philosophy Section (Requested in Sections list) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                PHILOSOPHY
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Our Coaching Methodology
              </h2>
              <p className="text-zinc-500 text-base">
                We believe in a three-pillar system for building athletes: Elite Technique, Tactical Mastery, and Team Discipline.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { title: "Elite Technique", desc: "Mastery of the ball, footwork, speed-dribbling, and reflex pass execution form the foundation of our drills." },
                { title: "Tactical Mastery", desc: "Players learn spacing dynamics, game positioning under pressure, and transitional phase adaptations." },
                { title: "Team Discipline", desc: "Understanding roles on the pitch, absolute support of team strategy, and respect for referees." }
              ].map((pillar, idx) => (
                <div key={idx} className="p-6 bg-zinc-50 border border-zinc-150 rounded-2xl flex flex-col gap-3">
                  <span className="text-lg font-bold text-zinc-900">{pillar.title}</span>
                  <p className="text-xs text-zinc-500 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Achievements & Trophy Showcase Section */}
        <section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              
              {/* Stats & Trophy Summary */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  HONORS
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                  Achievements & Trophy Shelf
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Our U14, U16, and senior rosters have actively dominated regional championships. Here are our highlighted trophy cabinet honors won since our club inception:
                </p>
                
                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-200">
                    <span className="text-sm text-zinc-500 font-semibold">State Cup Champions</span>
                    <span className="text-sm font-bold text-zinc-800 bg-blue-100 text-blue-800 px-2 py-0.5 rounded">3 Times</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-200">
                    <span className="text-sm text-zinc-500 font-semibold">Youth Premier League Division Title</span>
                    <span className="text-sm font-bold text-zinc-800 bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">5 Times</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-200">
                    <span className="text-sm text-zinc-500 font-semibold">Collegiate Placements (Scouted)</span>
                    <span className="text-sm font-bold text-zinc-800 bg-purple-100 text-purple-800 px-2 py-0.5 rounded">150+ Players</span>
                  </div>
                </div>
              </div>

              {/* Showcase Grid Box */}
              <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
                {[
                  { title: "Metro League Cup", desc: "First Place (2024, 2025)", age: "Senior Roster" },
                  { title: "East Coast Junior Trophy", desc: "Champions (2023)", age: "U16 Team" },
                  { title: "Independence Cup", desc: "Winners (2022)", age: "U14 Team" },
                  { title: "FairPlay Award", desc: "Best Conduct Award (2025)", age: "Club-Wide" }
                ].map((trophy, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 flex items-start gap-4 shadow-sm hover:border-blue-400 hover:shadow transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      {/* Trophy Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                        <path d="M4 22h16"/>
                        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/>
                        <path d="M12 2a5 5 0 0 0-5 5v5c0 2.76 2.24 5 5 5s5-2.24 5-5V7a5 5 0 0 0-5-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">{trophy.title}</h4>
                      <p className="text-xs text-zinc-500 mt-1">{trophy.desc}</p>
                      <span className="text-xxs uppercase tracking-wider text-zinc-400 block mt-2 font-bold">{trophy.age}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 6. Facilities Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                FACILITIES
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Elite Training Grounds
              </h2>
              <p className="text-zinc-500 text-base">
                Discover our professional club facility units designed to optimize student athletic progression.
              </p>
            </div>

            {/* Facilities Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Turf Playing Fields",
                  desc: "Three FIFA-grade artificial turf pitches allowing high-traction training routines in all weather setups.",
                  image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=400"
                },
                {
                  title: "Performance Gym",
                  desc: "High-spec conditioning centers detailing biomechanics tracking, speed-resistance bands, and weight stacks.",
                  image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400"
                },
                {
                  title: "Tactical Analytics Room",
                  desc: "Video projection rooms where mentors analyze player tactical footage, positioning errors, and match strategies.",
                  image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400"
                }
              ].map((facility, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-zinc-200 overflow-hidden bg-white shadow-sm flex flex-col hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-zinc-900">{facility.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{facility.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      
      <ClubFooter />
    </>
  );
}
