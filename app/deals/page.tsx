import { dummyProducts } from "@/lib/dummy-data";
import { ProductCard } from "@/components/ui/product-card";

export default function DealsPage() {
  const dealsProducts = dummyProducts.filter(
    (product) => product.discountPercentage && product.discountPercentage > 0
  );

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Special Deals</h1>
        <p className="text-muted-foreground mt-2">
          Check out our best deals and discounts on premium vaping products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dealsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {dealsProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No deals available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}