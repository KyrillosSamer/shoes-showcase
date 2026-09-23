import { Container, SectionHeading } from "@/shared/ui";
import { products, ProductCard } from "@/entities/product";

export function ProductGrid() {
  return (
    <section id="Products" className="py-16">
      <Container>
        <SectionHeading highlight="Products" className="mb-10">
          Our
        </SectionHeading>

        <ul className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
