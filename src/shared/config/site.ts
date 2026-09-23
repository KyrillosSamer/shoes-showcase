/**
 * Site-wide content that was previously hardcoded/duplicated across the
 * original index.html (nav links, footer links, contact info, socials).
 * Centralising it here means the Navbar and Footer can't drift out of sync,
 * and non-developers could edit this file without touching component code.
 */

export const siteConfig = {
  name: "Shoes",
  title: "Nike - Just Do It",
  description:
    "Discover the latest Nike collection. Shop premium sneakers with fast delivery, easy returns and 24/7 support.",
};

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#Home" },
  { label: "Products", href: "#Products" },
  { label: "About", href: "#About" },
  { label: "Review", href: "#Review" },
  { label: "Services", href: "#Services" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: "facebook" | "twitter" | "instagram" | "linkedin";
};

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
];

export const contactInfo = {
  address: "123/Colombo/Sri Lanka",
  phone: "+94 12 345 6789",
  email: "contact@gmail.com",
};

export const helpLinks: NavLink[] = [
  { label: "FAQ", href: "#" },
  { label: "Shipping", href: "#" },
  { label: "Returns", href: "#" },
  { label: "Payment Options", href: "#" },
];

export const storeLinks: NavLink[] = [
  { label: "Sri Lanka", href: "#" },
  { label: "USA", href: "#" },
  { label: "India", href: "#" },
  { label: "Japan", href: "#" },
];

export const services = [
  {
    icon: "truck" as const,
    title: "Fast Delivery",
    description: "Get your order delivered to your door in record time.",
  },
  {
    icon: "rotate" as const,
    title: "10 Days Replacement",
    description: "Not the right fit? Swap it within 10 days, no questions asked.",
  },
  {
    icon: "headset" as const,
    title: "24 x 7 Support",
    description: "Our support team is available around the clock to help.",
  },
];
