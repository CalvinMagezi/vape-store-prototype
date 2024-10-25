import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/dummy-data";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Product Categories</h1>
        <p className="text-muted-foreground mt-2">
          Browse our collection by category
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            href={`/categories/${category.slug}`}
            className="group"
          >
            <Card className="overflow-hidden">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <CardContent>
                    <h2 className="text-2xl font-bold text-white text-center">
                      {category.name}
                    </h2>
                    {category.description && (
                      <p className="text-white/90 text-center mt-2">
                        {category.description}
                      </p>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}