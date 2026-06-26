import React from "react";
import Image from "next/image";

const PHOTOS = [
  "/practice/WhatsApp Image 2026-06-23 at 1.19.50 PM.jpeg",
  "/practice/WhatsApp Image 2026-06-25 at 11.48.06 PM.jpeg",
  "/practice/WhatsApp Image 2026-06-25 at 11.48.07 PM.jpeg",
  "/practice/WhatsApp Image 2026-06-25 at 11.48.08 PM (1).jpeg",
  "/practice/WhatsApp Image 2026-06-25 at 11.48.08 PM (2).jpeg",
  "/practice/WhatsApp Image 2026-06-25 at 11.48.08 PM (3).jpeg",
];

export default function GalleryPreview() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              GALLERY
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Latest Club Photos
            </h2>
          </div>
          <div>
            <a
              href="/gallery"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-transparent px-6 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 hover:border-zinc-400 transition-colors"
            >
              View Gallery
            </a>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {PHOTOS.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-100 group shadow-sm"
            >
              <Image
                src={src}
                alt={`Club gallery action photo ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* overlay dark glow */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
