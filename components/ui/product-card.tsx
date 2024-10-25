"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { useStore } from "@/lib/store";
import { Product } from "@/lib/dummy-data";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export function ProductCard({ product, showCategory = true }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      addToCart(product);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card className="flex flex-col h-full">
      <Link href={`/products/${product.slug}`}>
        <CardHeader className="p-0">
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <img
              src={product.images[0].url}
              alt={product.images[0].alt}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
            {product.discountPercentage && (
              <Badge
                variant="destructive"
                className="absolute top-2 right-2"
              >
                {product.discountPercentage}% OFF
              </Badge>
            )}
          </div>
        </CardHeader>
      </Link>
      <CardContent className="flex-1 p-4">
        {showCategory && (
          <Badge variant="outline" className="mb-2">
            {product.category}
          </Badge>
        )}
        <Link href={`/products/${product.slug}`}>
          <CardTitle className="line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="font-bold text-lg">
              ${product.price.toFixed(2)}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </div>
            )}
          </div>
          <span
            className={`text-sm ${
              product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full gap-2"
          onClick={handleAddToCart}
          disabled={isLoading || product.stock === 0}
        >
          <ShoppingCart className="h-4 w-4" />
          {isLoading ? "Adding..." : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}