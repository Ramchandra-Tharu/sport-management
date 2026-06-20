import React from "react";
import Image from "next/image";

const PHOTOS = [
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=400",
  "https://images.unsplash.com/photo-1531830307402-b5de39772b55?auto=format&fit=crop&q=80&w=400",
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
