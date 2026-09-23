"use client";

import { Button } from "@/shared/ui";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex items-center gap-2 rounded-full bg-gray-200 p-1"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        className="min-w-0 flex-1 bg-transparent px-3 py-1.5 text-sm outline-none"
      />
      <Button type="submit" className="px-4 py-1.5 text-xs">
        Subscribe
      </Button>
    </form>
  );
}
