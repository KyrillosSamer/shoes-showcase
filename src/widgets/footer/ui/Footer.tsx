import { House, Phone, Mail } from "lucide-react";
import {
  Container,
  IconLink,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/shared/ui";
import {
  contactInfo,
  helpLinks,
  storeLinks,
  socialLinks,
} from "@/shared/config/site";
import { NewsletterForm } from "./NewsletterForm";

const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
};

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <Container className="grid grid-cols-2 gap-x-5 gap-y-8 py-10 sm:gap-x-8 sm:gap-y-10 sm:py-12 lg:grid-cols-5">
        <div>
          <h3 className="mb-3 text-base font-semibold text-brand-purple sm:mb-5 sm:text-xl">
            Contact
          </h3>
          <a href="#" className="mb-2 flex items-start gap-2 text-xs sm:items-center sm:text-sm">
            <House className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0" aria-hidden="true" />{" "}
            {contactInfo.address}
          </a>
          <a href="#" className="mb-2 flex items-center gap-2 text-xs sm:text-sm">
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" /> {contactInfo.phone}
          </a>
          <a href="#" className="flex items-center gap-2 text-xs sm:text-sm">
            <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {contactInfo.email}
          </a>
        </div>

        <div>
          <h3 className="mb-3 text-base font-semibold text-brand-purple sm:mb-5 sm:text-xl">
            Get Help
          </h3>
          {helpLinks.map((link) => (
            <a key={link.label} href={link.href} className="mb-2 block text-xs sm:text-sm">
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h3 className="mb-3 text-base font-semibold text-brand-purple sm:mb-5 sm:text-xl">
            Our Stores
          </h3>
          {storeLinks.map((link) => (
            <a key={link.label} href={link.href} className="mb-2 block text-xs sm:text-sm">
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <h3 className="mb-3 text-base font-semibold text-brand-purple sm:mb-5 sm:text-xl">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <IconLink
                key={social.label}
                href={social.href}
                label={social.label}
                size="sm"
                icon={
                  (() => {
                    const Icon = socialIcons[social.icon];
                    return <Icon className="h-4 w-4" />;
                  })()
                }
              />
            ))}
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="mb-3 text-base font-semibold text-brand-purple sm:mb-5 sm:text-xl">
            Newsletter
          </h3>
          <NewsletterForm />
        </div>
      </Container>
    </footer>
  );
}
