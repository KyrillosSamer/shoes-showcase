import { Navbar } from "@/widgets/navbar";
import { Hero } from "@/widgets/hero";
import { ProductGrid } from "@/widgets/product-grid";
import { AboutGallery } from "@/widgets/about-gallery";
import { ReviewsSection } from "@/widgets/reviews-section";
import { ServicesSection } from "@/widgets/services-section";
import { LoginForm } from "@/widgets/login-form";
import { Footer } from "@/widgets/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <AboutGallery />
        <ReviewsSection />
        <ServicesSection />
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
