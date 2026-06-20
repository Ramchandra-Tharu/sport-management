import React from "react";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="py-16 md:py-24 bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Frame Card container */}
        <div className="overflow-hidden rounded-3xl border border-dark-border bg-dark-card">
          <div className="grid gap-8 md:grid-cols-12 md:items-stretch">
            {/* Left Column: Quote & Socials */}
            <div className="p-8 sm:p-12 md:col-span-7 lg:col-span-8 flex flex-col justify-between gap-12">
              <div className="flex flex-col gap-6">
                {/* SVG Quote Icon */}
                <div className="text-lime-neon/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.192 15.757c0-.907-.188-1.754-.563-2.54a5.72 5.72 0 0 1-1.5-2.048c-.625-1.27-.938-2.61-.938-4.02h3.812V3.19H4.19v4c0 2.217.433 4.223 1.3 6.015.867 1.792 2.08 3.195 3.638 4.21l2.064-1.658zm8.808 0c0-.907-.188-1.754-.563-2.54a5.72 5.72 0 0 1-1.5-2.048c-.625-1.27-.938-2.61-.938-4.02h3.813V3.19h-7.813v4c0 2.217.433 4.223 1.3 6.015.867 1.792 2.08 3.195 3.638 4.21l2.063-1.658z"/>
                  </svg>
                </div>
                
                <blockquote className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl leading-tight">
                  &ldquo;Helping you achieve your fitness potential is my mission.&rdquo;
                </blockquote>
                
                <cite className="not-italic">
                  <span className="block text-lg font-bold text-zinc-900">Mike Vasquez</span>
                  <span className="block text-sm text-zinc-500">Certified Elite Fitness Coach</span>
                </cite>
              </div>

              {/* Social Channels */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="text-sm font-semibold text-zinc-600">Follow me:</span>
                <div className="flex gap-3">
                  {[
                    {
                      name: "Facebook",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                      ),
                      link: "#"
                    },
                    {
                      name: "LinkedIn",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                          <rect x="2" y="9" width="4" height="12"/>
                          <circle cx="4" cy="4" r="2"/>
                        </svg>
                      ),
                      link: "#"
                    },
                    {
                      name: "YouTube",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                        </svg>
                      ),
                      link: "#"
                    },
                    {
                      name: "Instagram",
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      ),
                      link: "#"
                    }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      aria-label={social.name}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-dark-border text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Photo */}
            <div className="relative min-h-[300px] md:col-span-5 lg:col-span-4">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
                alt="Mike Vasquez standing in Gym"
                fill
                className="object-cover grayscale brightness-90 contrast-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
