"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

import ClubFooter from "@/components/ClubFooter";
import Navbar from "@/components/Navbar";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/lib/gallery";

const CATEGORIES = ["All", "Match", "Training", "Trophy", "Event", "Video"] as const;
type CategoryType = (typeof CATEGORIES)[number];

const CATEGORY_LABELS: Record<CategoryType, string> = {
  All: "All Media",
  Match: "Match Photos",
  Training: "Training Photos",
  Trophy: "Trophy Photos",
  Event: "Events",
  Video: "Videos",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Filter photos based on active category and search query
  const filteredPhotos = useMemo(() => {
    return GALLERY_PHOTOS.filter((photo) => {
      const matchesCategory =
        activeCategory === "All" ||
        (activeCategory === "Video" ? photo.type === "video" : photo.category === activeCategory && photo.type !== "video");
      const matchesSearch =
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Navigate lightbox index
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  };

  const handleClose = () => {
    setLightboxIndex(null);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Toggle Browser Full Screen
  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error(err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.error(err));
    }
  };

  // Keyboard navigation listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos]);

  // Sync fullscreen state if changed externally
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const activePhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-white text-zinc-900">
        
        {/* Banner Section */}
        <section className="relative h-[380px] md:h-[520px] flex items-center justify-center bg-black text-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=1200"
              alt="Club Gallery Banner"
              fill
              priority
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/75" />
          </div>
          
          <div className="relative z-10 px-6 md:px-12 flex flex-col gap-3">
            <span className="text-sm font-semibold tracking-wider text-blue-500 uppercase">
              MEDIA HUB
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl uppercase">
              Club Media Gallery
            </h1>
            <p className="text-zinc-300 text-sm md:text-base max-w-xl mx-auto">
              Relive the greatest match fixtures, training moments, achievements, and club assemblies.
            </p>
          </div>
        </section>

        {/* Gallery Controls & Masonry Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* Filter controls row */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-16 border-b border-zinc-100 pb-8">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setLightboxIndex(null); // Reset lightbox on filter change
                      }}
                      className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 border cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10"
                          : "border-zinc-200 bg-white text-zinc-600 hover:text-zinc-950 hover:border-zinc-400"
                      }`}
                    >
                      {CATEGORY_LABELS[cat]}
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search photos & details..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 text-sm rounded-full border border-zinc-200 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-900 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

            </div>

            {/* Masonry Grid */}
            {filteredPhotos.length > 0 ? (
              <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {filteredPhotos.map((photo, idx) => (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxIndex(idx)}
                    className="break-inside-avoid mb-6 rounded-3xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`relative ${photo.aspect} rounded-t-2xl overflow-hidden bg-zinc-900`}>
                      {photo.type === "video" ? (
                        <>
                          {/* Video poster thumbnail */}
                          {photo.poster && (
                            <Image
                              src={photo.poster}
                              alt={photo.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 300px"
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.03] brightness-75"
                            />
                          )}
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/90 shadow-lg shadow-blue-600/40 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 border-2 border-white/30">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7 ml-1">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          {/* Video badge */}
                          <span className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                              <path d="M4 4l16 8-16 8V4z" />
                            </svg>
                            Video
                          </span>
                        </>
                      ) : (
                        <>
                          <Image
                            src={photo.src}
                            alt={photo.title}
                            fill
                            sizes="(max-w-7xl) 100vw, 300px"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                          <span className="absolute bottom-3 left-3 bg-zinc-900/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-white/10">
                            {photo.category}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="p-5 flex flex-col gap-1">
                      <h3 className="text-sm font-extrabold text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-zinc-500 text-xs line-clamp-2 leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border border-dashed border-zinc-200 rounded-3xl">
                <span className="text-lg text-zinc-400 font-bold">No photos found matching your criteria.</span>
                <p className="text-zinc-400 text-sm mt-1">Try resetting the filters or modifying your search query.</p>
              </div>
            )}

          </div>
        </section>

        {/* Lightbox Modal */}
        {activePhoto && lightboxIndex !== null && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in">
            
            {/* Top Toolbar */}
            <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 z-10 bg-gradient-to-b from-black/50 to-transparent">
              <span className="text-white text-xs font-bold uppercase tracking-wider bg-blue-600 px-3 py-1 rounded-full">
                {activePhoto.category} Photo {lightboxIndex + 1} of {filteredPhotos.length}
              </span>

              <div className="flex items-center gap-3">
                {/* Full Screen Toggle Button */}
                <button
                  onClick={toggleFullScreen}
                  className="h-10 w-10 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Toggle Fullscreen"
                >
                  {isFullscreen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 9V4.5M9 9H4.5M9 9L3 3m12 6V4.5M15 9h4.5M15 9l6-6M9 15v4.5M9 15H4.5M9 15l-6 6m12-6v4.5M15 15h4.5M15 15l6 6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
                      />
                    </svg>
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="h-10 w-10 flex items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl aspect-[3/2] max-h-[70vh] flex items-center justify-center px-4">
              
              {/* Prev Navigation Button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 h-12 w-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-blue-500 transition-colors z-20 cursor-pointer"
                title="Previous (Arrow Left)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Lightbox Image or Video */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
                {activePhoto.type === "video" ? (
                  <video
                    key={activePhoto.src}
                    src={activePhoto.src}
                    poster={activePhoto.poster}
                    controls
                    autoPlay
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <Image
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                )}
              </div>

              {/* Next Navigation Button */}
              <button
                onClick={handleNext}
                className="absolute right-6 h-12 w-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-blue-500 transition-colors z-20 cursor-pointer"
                title="Next (Arrow Right)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

            </div>

            {/* Bottom Caption Overlay */}
            <div className="w-full max-w-4xl text-center px-6 mt-8 flex flex-col gap-2">
              <h2 className="text-2xl font-black text-white">{activePhoto.title}</h2>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
                {activePhoto.description}
              </p>
            </div>

          </div>
        )}

      </main>

      <ClubFooter />
    </>
  );
}
