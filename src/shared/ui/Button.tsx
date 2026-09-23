import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple";

const variants = {
  solid:
    "bg-gradient-to-r from-brand-pink to-brand-purple text-white hover:from-brand-purple hover:to-brand-pink",
  outline:
    "border-2 border-brand-pink text-black shadow-[0_0_8px_theme(colors.brand.pink)] hover:border-transparent hover:bg-brand-pink hover:text-white",
};

type LinkButtonProps = CommonProps & { href: string };

/** Use for navigational CTAs, e.g. "Shop Now". */
export function LinkButton({ href, children, variant = "solid", className }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

/** Use for form/action buttons, e.g. "Add to Cart", "Subscribe", "Login". */
export function Button({
  children,
  variant = "solid",
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
