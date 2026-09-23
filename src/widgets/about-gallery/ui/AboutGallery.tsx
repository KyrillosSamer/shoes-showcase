"use client";

import { useState } from "react";
import Image from "next/image";
import { Container, SectionHeading, LinkButton } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";

const DEFAULT_IMAGE = "/images/red_shoes1.png";

const galleryImages = [
  DEFAULT_IMAGE,
  "/images/red_shoes2.png",
  "/images/red_shoes3.png",
  "/images/red_shoes4.png",
];

/**
 * Client component: this is the one place in the original site with real
 * interactivity (clicking a thumbnail swaps the large image), previously
 * done with a global `functio()` and `getElementById`. Replaced with local
 * component state -- no DOM queries needed.
 */
export function AboutGallery() {
  const [activeImage, setActiveImage] = useState(DEFAULT_IMAGE);

  return (
    <section id="About" className="bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading highlight="About" className="mb-10 text-black sm:mb-14">
          Web
        </SectionHeading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_150px] md:items-start md:gap-6 lg:grid-cols-[360px_150px_minmax(0,1fr)] lg:items-stretch lg:gap-8">
          {/* Main image card */}
          <div className="relative mx-auto w-full max-w-md rounded-2xl border-2 border-black/85 bg-white p-5 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.35)] sm:p-6 md:mx-0 md:max-w-none">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
              <span className="absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[9rem] font-black leading-none text-black/5 sm:text-[11rem]">
                S
              </span>
            </div>

            <span className="relative block text-xl font-black text-black sm:text-2xl">S</span>

            <div className="relative mt-2 flex min-h-[190px] items-center justify-center sm:min-h-[260px]">
              <Image
                key={activeImage}
                src={activeImage}
                alt="Selected shoe"
                width={320}
                height={320}
                className="h-auto w-full max-w-[210px] object-contain sm:max-w-[280px]"
              />
            </div>

            <p className="relative mt-2 text-center text-[11px] italic uppercase tracking-wide text-gray-500 sm:text-xs">
              Features our signature comfort-first build.
            </p>

            <span className="absolute -bottom-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-pink to-brand-purple text-sm font-bold text-white shadow-md">
              S
            </span>
          </div>

          {/* Other views thumbnails */}
          <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
              Other Views
            </p>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3 md:grid-cols-2">
              {galleryImages.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  aria-label="Show this shoe angle"
                  aria-pressed={activeImage === src}
                  onClick={() => setActiveImage(src)}
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-lg border-2 bg-gray-100 p-1.5 transition",
                    activeImage === src
                      ? "border-brand-pink shadow-[0_0_10px_theme(colors.brand.pink)]"
                      : "border-gray-300 hover:border-brand-pink/60",
                    index >= 2 && "md:col-span-2"
                  )}
                >
                  <Image src={src} alt="" fill sizes="90px" className="object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Description panel */}
          <div className="relative mx-auto flex w-full max-w-md flex-col justify-center rounded-2xl border-2 border-brand-pink/70 bg-white p-6 shadow-[0_0_25px_-8px_theme(colors.brand.pink)] sm:p-8 md:col-span-2 md:mx-0 md:max-w-none lg:col-span-1 lg:mt-0">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
              Every pair in this collection is designed around comfort-first materials and a
              silhouette that works as well on the street as it does on the court.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-base">
              Whether you&apos;re after a daily trainer or a statement piece, there&apos;s a
              build here tuned for it.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <LinkButton href="#Products" variant="outline">
            Shop Now
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
