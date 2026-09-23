import { Truck, RotateCcw, Headset } from "lucide-react";
import { Container, SectionHeading } from "@/shared/ui";
import { services } from "@/shared/config/site";

const icons = {
  truck: Truck,
  rotate: RotateCcw,
  headset: Headset,
};

export function ServicesSection() {
  return (
    <section id="Services" className="py-16">
      <Container className="text-center">
        <SectionHeading highlight="services" className="text-3xl">
          Our
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <div key={service.title} className="flex flex-col items-center">
                <Icon className="h-14 w-14 text-orange-400" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
