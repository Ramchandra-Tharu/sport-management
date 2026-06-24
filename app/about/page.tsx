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
        <section className="relative h-[380px] md:h-[520px] flex items-center justify-center bg-black text-center">
          {/* Background — Parallax */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/about-background.jpeg')",
              backgroundAttachment: "fixed",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              opacity: 0.65,
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/70" />
          
          <div className="relative z-10 px-6 md:px-12 flex flex-col gap-3 pt-16">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              VINDHYACHAL FC ACADEMY
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl uppercase">
              About Our Club
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto">
              Based in Mandideep, Madhya Pradesh — promoting football, developing young talent, and creating opportunities for players to shine. ⚽
            </p>
          </div>
        </section>

        {/* 2. Club History Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  MANDIDEEP, MADHYA PRADESH
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                  Our Journey and Heritage
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Our football club was established with the vision of promoting football, developing young talent, and creating opportunities for players to showcase their skills. Based in Mandideep, Madhya Pradesh, the club provides a positive and disciplined environment where players can improve their technical, tactical, and physical abilities.
                </p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  The club regularly conducts training sessions, friendly matches, and football development activities to encourage participation and growth in the sport. Our players come from diverse backgrounds and share a common passion for football, striving to improve their performance and represent the club with pride.
                </p>
              </div>

              {/* History Timeline Side */}
              <div className="lg:col-span-6 flex flex-col gap-6 p-8 rounded-3xl bg-zinc-50 border border-zinc-200">
                <h3 className="text-xl font-bold text-zinc-900">Key Milestones</h3>
                <div className="flex flex-col gap-6">
                  {[
                    { year: "Est.", title: "Club Founded", desc: "Founded in Mandideep, Madhya Pradesh, with a vision to promote football and develop young talent in the region." },
                    { year: "⚽", title: "Training & Matches", desc: "Regular training sessions, friendly matches, and football development activities launched to grow participation." },
                    { year: "🏆", title: "Coach Sirzan Chaudhary", desc: "Led by Sirzan Chaudhary — a dedicated footballer, coach, and referee with deep passion and extensive experience." },
                    { year: "🌟", title: "Community Growth", desc: "Continuously nurturing talented footballers and building strong team spirit across the local community." }
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
                  Our mission is to promote and strengthen football culture in Mandideep by providing quality training, guidance, and opportunities to young football enthusiasts. We aim to identify talented players, develop their technical and physical abilities, and help them achieve their dreams of competing at district, state, and national levels. Through discipline, teamwork, dedication, and professional coaching, we strive to create a pathway for aspiring footballers to reach their full potential and represent Mandideep with pride.
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
                  Our vision is to make Mandideep a recognized football hub known for producing skilled and professional football players. We aspire to increase the passion and craze for football in the community, inspire more youth to participate in the sport, and build a strong football ecosystem that nurtures talent from the grassroots level. We envision our club becoming a leading football development center that consistently prepares players to compete successfully at state, national, and higher levels of football while promoting sportsmanship, excellence, and a lifelong love for the game. ⚽🏆🔥
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
                Under Coach Sirzan Chaudhary&apos;s guidance, our philosophy is built on continuous learning, hard work, and respect — both on and off the field.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "⚽",
                  title: "Skill Development",
                  desc: "Structured coaching focused on technical excellence, including dribbling, passing, shooting, ball control, and decision-making to build a strong football foundation and enhance individual player performance."
                },
                {
                  icon: "🤝",
                  title: "Teamwork & Tactical Awareness",
                  desc: "Players are trained to work effectively as a team through tactical sessions that emphasize positioning, communication, game intelligence, and strategic decision-making in competitive match situations."
                },
                {
                  icon: "💪",
                  title: "Discipline & Physical Fitness",
                  desc: "A strong focus on fitness, endurance, agility, discipline, and sportsmanship helps players develop the physical and mental qualities required to succeed both on and off the field."
                },
                {
                  icon: "🌟",
                  title: "Character & Leadership Development",
                  desc: "We encourage respect, responsibility, confidence, and leadership, helping players grow into well-rounded individuals and positive role models within the football community."
                },
                {
                  icon: "🏆",
                  title: "Competitive Exposure",
                  desc: "Regular friendly matches, tournaments, and competitive fixtures provide valuable match experience and prepare players for district, state, and national-level football competitions."
                },
                {
                  icon: "🔥",
                  title: "Pathway to Professional Football",
                  desc: "Our coaching program is designed to identify and nurture talent, providing players with the skills, guidance, and opportunities needed to progress toward professional, state, and national-level football."
                }
              ].map((pillar, idx) => (
                <div key={idx} className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl flex flex-col gap-3 hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  <span className="text-3xl">{pillar.icon}</span>
                  <span className="text-base font-bold text-zinc-900">{pillar.title}</span>
                  <p className="text-xs text-zinc-500 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
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
