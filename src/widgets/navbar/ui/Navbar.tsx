"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { Container, IconButton } from "@/shared/ui";
import { navLinks } from "@/shared/config/site";

/**
 * The original nav had no mobile handling at all -- the five links would
 * just wrap and collide with the icons on small screens. This adds a
 * standard hamburger toggle for narrow viewports; everything above `md`
 * renders the original horizontal layout.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_0_8px_rgba(0,0,0,0.15)]">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#Home" className="text-2xl font-bold text-brand-pink sm:text-3xl">
          Shoe<span className="text-brand-purple underline">s</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-black transition hover:text-brand-pink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <IconButton label="Wishlist" icon={<Heart className="h-4 w-4" />} size="sm" />
          <IconButton label="Cart" icon={<ShoppingCart className="h-4 w-4" />} size="sm" />
          <IconButton label="Account" icon={<User className="h-4 w-4" />} size="sm" />
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center text-black md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium text-black transition hover:text-brand-pink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
