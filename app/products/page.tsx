import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProductFilters from "@/components/products/filters";
import { dummyProducts } from "@/lib/dummy-data";

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <ProductFilters />
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">All Products</h1>
            <p className="text-muted-foreground">
              Showing {dummyProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dummyProducts.map((product) => (
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
      </div>
    </div>
  );
}