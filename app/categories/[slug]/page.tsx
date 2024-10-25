import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { categories, dummyProducts } from "@/lib/dummy-data";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all categories at build time
export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryProducts = dummyProducts.filter(
    (product) => product.category === category.slug
  );

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        {category.description && (
          <p className="text-muted-foreground mt-2">{category.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoryProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <CardTitle className="line-clamp-1">{product.name}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" disabled={product.stock === 0}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}