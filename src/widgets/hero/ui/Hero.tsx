import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {
  Container,
  LinkButton,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/shared/ui";

const heroSocials = [
  { label: "Facebook", icon: FacebookIcon },
  { label: "Twitter", icon: TwitterIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "LinkedIn", icon: LinkedinIcon },
];

export function Hero() {
  return (
    <section
      id="Home"
      className="relative flex min-h-[calc(100svh-4rem)] items-center bg-gradient-to-br from-white via-white to-brand-pink/5 bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat pt-16 pb-10 sm:pb-0"
    >
      <Container className="flex w-full flex-col items-center gap-8 py-6 sm:gap-10 sm:py-10 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl lg:text-7xl">
            Nike
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl">
              Collection
            </span>
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-gray-700 sm:mt-6 sm:text-base">
            Step into performance and style with our latest Nike collection.
            Built for everyday comfort and designed to keep up with wherever
            you&apos;re headed next.
          </p>

          <LinkButton href="#Products" className="mt-7 sm:mt-8">
            Shop Now
            <ChevronRight className="h-4 w-4" />
          </LinkButton>
        </div>

        <div className="w-full max-w-[300px] sm:max-w-sm md:max-w-md">
          <Image
            src="/images/shoes.png"
            alt="Featured Nike shoe"
            width={500}
            height={500}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </Container>

      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {heroSocials.map(({ label, icon: Icon }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="text-gray-700 transition hover:text-brand-pink"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </section>
  );
}


