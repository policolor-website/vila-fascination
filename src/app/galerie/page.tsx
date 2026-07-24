"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">Galerie</h1>
          <p className="text-muted text-lg">Vila Fascination · Predeal</p>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 60}>
              <button
                onClick={() => setLightbox(img)}
                className="relative aspect-square overflow-hidden block w-full cursor-pointer border-0 bg-transparent p-0"
              >
                <Image
                  src={img}
                  alt={`Galerie ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-night/0 hover:bg-night/30 transition-colors" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-100 bg-night/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          style={{ animation: "fadeIn 0.3s ease forwards" }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream hover:text-gold text-3xl bg-transparent border-0 cursor-pointer"
          >
            ✕
          </button>
          <div className="relative w-full max-w-4xl aspect-4/3">
            <Image
              src={lightbox}
              alt="Galerie"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
