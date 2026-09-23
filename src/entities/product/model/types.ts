export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  /** Out of 5, e.g. 4.5 */
  rating: number;
  image: string;
};
