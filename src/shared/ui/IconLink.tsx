import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

type Size = "sm" | "md";

const sizeClasses: Record<Size, string> = {
  sm: "h-8 w-8 text-sm",
  md: "h-11 w-11 text-base",
};

type IconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  size?: Size;
  className?: string;
};

/**
 * Circular icon link, for cases that genuinely navigate somewhere
 * (footer social links). Every icon-only control needs an accessible
 * label -- the original markup relied on bare <i> icons with no text
 * alternative at all.
 */
export function IconLink({ href, label, icon, size = "md", className }: IconLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-full text-black shadow-sm transition hover:text-white",
        sizeClasses[size],
        className
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-br from-brand-pink to-brand-purple transition-transform duration-500 group-hover:translate-x-0" />
      <span className="relative z-10">{icon}</span>
    </Link>
  );
}

type IconButtonProps = {
  label: string;
  icon: ReactNode;
  size?: Size;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Circular icon button, for actions with no real destination yet
 * (wishlist/share on a product card, the nav's cart/user icons).
 * A <button> is the correct element here -- these aren't links.
 */
export function IconButton({ label, icon, size = "md", className, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-md border-2 border-gray-300 text-gray-600 transition hover:border-brand-pink hover:text-brand-pink",
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {icon}
    </button>
  );
}
