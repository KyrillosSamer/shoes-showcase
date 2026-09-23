import type { SVGProps } from "react";

/**
 * lucide-react removed its brand/social icon set. Rather than pull in an
 * extra dependency for four small glyphs, these are minimal hand-drawn
 * outlines kept visually consistent with the lucide icon style
 * (24x24 viewBox, currentColor stroke).
 */

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path
        d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5c0-.5.3-1 1-1h2V8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="m4 4 16 16M20 4 4 20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="10" x2="7" y2="16" strokeLinecap="round" />
      <circle cx="7" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      <path
        d="M11 16v-3.5a2.5 2.5 0 0 1 5 0V16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
