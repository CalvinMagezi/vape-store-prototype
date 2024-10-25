import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Star, Truck, Shield, Clock, Zap } from "lucide-react";
import { dummyProducts } from "@/lib/dummy-data";
import { ProductCard } from "@/components/ui/product-card";
import { Newsletter } from "@/components/marketing/newsletter";
import { CategoryShowcase } from "@/components/marketing/category-showcase";

export default function Home() {
  const featuredProducts = dummyProducts.filter((product) => product.featured);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4" variant="secondary">
              Premium Collection
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Elevate Your Vaping Experience
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Discover our curated selection of premium vaping devices and
              accessories. Engineered for performance, designed for sophistication.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="gap-2">
                Shop Collection <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Truck,
              title: "Free Express Shipping",
              description: "On orders over $100",
            },
            {
              icon: Shield,
              title: "Secure Transactions",
              description: "100% secure checkout",
            },
            {
              icon: Clock,
              title: "Same Day Dispatch",
              description: "Order before 2 PM",
            },
            {
              icon: Star,
              title: "Premium Quality",
              description: "Satisfaction guaranteed",
            },
          ].map((feature, index) => (
            <Card key={index} className="border-none shadow-none bg-muted/50">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="container" />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Featured Products Section */}
      <section className="container pb-16">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-4">
            Featured Collection
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Best Sellers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular premium vaping devices and accessories,
            carefully selected for exceptional quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}