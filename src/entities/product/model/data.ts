import type { Product } from "./types";

/**
 * In the original site this data (name, price, description, star count)
 * was hand-written inside every product <div>. Pulling it out means the
 * UI component just renders whatever it's given, and swapping in a real
 * data source (CMS/API) later only touches this file.
 */
export const products: Product[] = [
  {
    id: "shoe-1",
    name: "Nike Air Zoom",
    description: "Lightweight everyday trainer built for all-day comfort.",
    price: 100.99,
    rating: 5,
    image: "/images/shoes1.png",
  },
  {
    id: "shoe-2",
    name: "Nike Air Max",
    description: "Bold cushioning with a retro silhouette.",
    price: 250.99,
    rating: 5,
    image: "/images/shoes2.png",
  },
  {
    id: "shoe-3",
    name: "Nike React",
    description: "Responsive foam for a smoother stride.",
    price: 200.99,
    rating: 4,
    image: "/images/shoes3.png",
  },
  {
    id: "shoe-4",
    name: "Nike Pegasus",
    description: "A versatile daily runner built to move with you.",
    price: 300.99,
    rating: 4.5,
    image: "/images/shoes4.png",
  },
  {
    id: "shoe-5",
    name: "Nike Blazer",
    description: "Classic court style with a modern update.",
    price: 175.99,
    rating: 3.5,
    image: "/images/shoes5.png",
  },
  {
    id: "shoe-6",
    name: "Nike Cortez",
    description: "An icon since 1972, still built for speed.",
    price: 150.99,
    rating: 4.5,
    image: "/images/shoes6.png",
  },
  {
    id: "shoe-7",
    name: "Nike Free Run",
    description: "Barefoot-inspired flexibility for natural movement.",
    price: 100.99,
    rating: 5,
    image: "/images/shoes7.png",
  },
  {
    id: "shoe-8",
    name: "Nike Air Force 1",
    description: "The forever-classic that started it all.",
    price: 400.99,
    rating: 5,
    image: "/images/shoes8.png",
  },
];
