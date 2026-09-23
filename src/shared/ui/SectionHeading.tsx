import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type SectionHeadingProps = {
  children: ReactNode;
  highlight?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

/**
 * The original CSS repeated the same "uppercase heading with a gradient
 * clipped span" pattern for Products/About/Review/Services. Extracted once
 * here instead of duplicating the gradient classes on every section.
 */
export function SectionHeading({
  children,
  highlight,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "flex items-center justify-center gap-3 text-center text-3xl font-bold uppercase tracking-wide sm:text-4xl md:text-5xl",
        className
      )}
    >
      {children}
      {highlight ? (
        <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
          {highlight}
        </span>
      ) : null}
    </Tag>
  );
}
