import { Star, StarHalf } from "lucide-react";
import { cn } from "@/shared/lib/cn";

type StarRatingProps = {
  /** Rating out of 5, e.g. 4.5 */
  rating: number;
  className?: string;
};

const MAX_STARS = 5;

/**
 * The original markup hardcoded a different combination of full/half/empty
 * <i> icons for every single product and review card. That's error-prone
 * (easy to miscount) and not reusable. This derives the icons from a single
 * numeric rating instead.
 */
export function StarRating({ rating, className }: StarRatingProps) {
  const clamped = Math.max(0, Math.min(MAX_STARS, rating));
  const fullStars = Math.floor(clamped);
  const hasHalfStar = clamped - fullStars >= 0.5;
  const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className={cn("flex items-center gap-0.5 text-orange-400", className)}
      role="img"
      aria-label={`Rated ${clamped} out of ${MAX_STARS} stars`}
    >
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 fill-current" aria-hidden="true" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" aria-hidden="true" />
      ))}
    </div>
  );
}
