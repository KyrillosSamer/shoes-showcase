import Image from "next/image";
import { Heart, Share2 } from "lucide-react";
import { IconButton, StarRating, Button } from "@/shared/ui";
import type { Product } from "../model/types";

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="group relative flex w-full max-w-[290px] flex-col items-center rounded-md bg-gray-50 p-5 text-center shadow-[0_0_8px_theme(colors.brand.purple)]">
      <div className="absolute left-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <IconButton label={`Add ${product.name} to wishlist`} icon={<Heart className="h-4 w-4" />} size="sm" />
        <IconButton label={`Share ${product.name}`} icon={<Share2 className="h-4 w-4" />} size="sm" />
      </div>

      <div className="flex h-[220px] items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={180}
          height={180}
          className="h-auto w-[150px] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="w-full">
        <h3 className="mt-4 text-2xl font-bold">NIKE</h3>
        <p className="mt-2 text-sm text-gray-500">{product.description}</p>
        <p className="my-2 font-semibold">{priceFormatter.format(product.price)}</p>
        <StarRating rating={product.rating} className="mb-4 justify-center" />
        <Button className="w-full">Add To Cart</Button>
      </div>
    </li>
  );
}
