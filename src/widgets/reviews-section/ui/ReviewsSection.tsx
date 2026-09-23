import { Container, SectionHeading } from "@/shared/ui";
import { reviews, ReviewCard } from "@/entities/review";

export function ReviewsSection() {
  return (
    <section id="Review" className="py-16">
      <Container>
        <SectionHeading highlight="Review" className="mb-10 text-2xl sm:text-3xl">
          Customer&apos;s
        </SectionHeading>

        <ul className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
