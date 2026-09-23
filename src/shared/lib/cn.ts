/**
 * Joins class names together, skipping falsy values.
 * Small local replacement for `clsx` so we don't add a dependency
 * for something this simple.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
