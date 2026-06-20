"use client";

import React, { useState } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Sarah",
    role: "Architect",
    quote: "Working with this trainer has truly elevated my fitness journey. I’ve improved my strength, stamina, and overall mindset. The customized plans and ongoing motivation kept me consistent and focused throughout. The results speak for themselves.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "John",
    role: "Software Engineer",
    quote: "The nutritional advice combined with the targeted conditioning plans helped me shed 15 lbs in just two months. Mike's constant availability on WhatsApp made all the difference when I felt like giving up. The plans are simple but highly effective.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Emily",
    role: "Product Designer",
    quote: "Mike's workouts are challenging but incredibly rewarding. Every week feels like a step forward. He keeps detailed metrics of my lifts and biometric data, making it very transparent to track progress. Best coach I've ever had!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "David",
    role: "Marketing Director",
    quote: "I was looking for a coach who could work around my busy executive schedule. Mike's elite coaching is highly flexible and the virtual roadmap he built is fantastic. The weekly progress reviews are extremely helpful to keep me accountable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Jessica",
    role: "Physician",
    quote: "As a doctor, I'm very picky about trainers. Mike's biomechanics knowledge is impressive. His injury-prevention methods are highly scientific, ensuring I stay safe while hitting new personal records. Excellent strength program.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Marcus",
    role: "Consultant",
    quote: "The complete transformation package is worth every penny. The meal plan is tasty and easy to prep. I feel more energetic at work, and my body composition has completely changed. Highly professional training environment.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-dark-bg border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Quote Block */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold tracking-wider text-lime-neon">TESTIMONIALS</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                What my clients say
              </h2>
            </div>

            {/* Quote container */}
            <div className="flex flex-col gap-6 p-8 rounded-3xl border border-dark-border bg-dark-card relative min-h-[260px] justify-between transition-all">
              {/* Star Ratings */}
              <div className="flex gap-1 text-lime-neon">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.321 21.28c-1.006.59-2.231-.307-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg text-zinc-700 leading-relaxed italic">
                &ldquo;{active.quote}&rdquo;
              </blockquote>

              <cite className="not-italic flex items-center gap-3 mt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-lime-neon/40">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="block text-sm font-bold text-zinc-900">{active.name}</span>
                  <span className="block text-xs text-zinc-500">{active.role}</span>
                </div>
              </cite>
            </div>

            {/* Review Statistics Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-dark-border bg-dark-card w-fit">
              <span className="text-lime-neon font-bold">4.9 / 5.0</span>
              <span className="h-4 w-px bg-zinc-300" />
              <span className="text-sm text-zinc-600">Based on 190 client reviews</span>
            </div>
          </div>

          {/* Right Column: Interactive Avatar Grid */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-6 max-w-[340px]">
              {TESTIMONIALS.map((client, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="group focus:outline-none flex flex-col items-center"
                    aria-label={`Show testimonial from ${client.name}`}
                  >
                    <div className={`relative h-20 w-20 overflow-hidden rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? "border-lime-neon scale-105 shadow-lg shadow-lime-neon/20" 
                        : "border-dark-border group-hover:border-zinc-400 scale-95 hover:scale-[0.98]"
                    }`}>
                      <Image
                        src={client.avatar}
                        alt={client.name}
                        fill
                        className={`object-cover transition-all duration-300 ${
                          isActive ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                        }`}
                      />
                    </div>
                    <span className={`text-xs mt-2 transition-colors font-medium ${
                      isActive ? "text-lime-neon" : "text-zinc-500 group-hover:text-zinc-800"
                    }`}>
                      {client.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
