import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/dummy-data";

export function CategoryShowcase() {
  return (
    <section className="container">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our extensive collection of premium vaping products across various categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group relative overflow-hidden"
          >
            <Card className="overflow-hidden h-[300px]">
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              </div>
              <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                {category.description && (
                  <p className="text-white/90">{category.description}</p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}