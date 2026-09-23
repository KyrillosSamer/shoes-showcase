import Image from "next/image";
import { StarRating } from "@/shared/ui";
import type { Review } from "../model/types";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <li className="w-full max-w-[430px] rounded-xl bg-white p-5 shadow-[0_0_10px_rgba(0,0,0,0.15)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
            <Image
              src={review.avatar}
              alt=""
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <strong className="text-lg">{review.name}</strong>
            <StarRating rating={review.rating} className="mt-1" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-justify leading-relaxed text-gray-600">{review.comment}</p>
    </li>
  );
}
