"use client";

import React, { useRef } from "react";
import Image from "next/image";

const GOALS = [
  {
    title: "Personal training",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600",
    description: "One-on-one tailored sessions built for maximum results.",
  },
  {
    title: "Nutritional guidance",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600",
    description: "Custom diet charts and food plans to fuel your fitness journey.",
  },
  {
    title: "Online coaching",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600",
    description: "Remote training schedules and biometric progress reporting.",
  },
  {
    title: "Group training",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600",
    description: "Energetic team sessions for communal push and motivation.",
  },
];

export default function GoalsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="classes" className="py-16 md:py-24 bg-dark-bg border-y border-dark-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-lime-neon">GOALS</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              What&apos;s your fitness goal?
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-transparent text-zinc-900 hover:bg-dark-hover transition-colors"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-border bg-transparent text-zinc-900 hover:bg-dark-hover transition-colors"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 snap-x snap-mandatory"
        >
          {GOALS.map((goal, idx) => (
            <div
              key={idx}
              className="relative min-w-[280px] sm:min-w-[340px] md:min-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border border-dark-border bg-dark-card group snap-start flex flex-col justify-end p-6"
            >
              {/* Background image */}
              <Image
                src={goal.image}
                alt={goal.title}
                fill
                className="object-cover grayscale brightness-50 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-[0.4]"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-lime-neon transition-colors">
                  {goal.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
