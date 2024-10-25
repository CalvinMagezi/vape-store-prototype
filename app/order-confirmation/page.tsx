"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function OrderConfirmationPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if accessed directly
    if (!document.referrer.includes("/checkout")) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="container max-w-2xl py-16 text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-muted-foreground mb-8">
        Your order has been successfully placed. We'll send you an email with your
        order details and tracking information once your package ships.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => router.push("/products")}>
          Continue Shopping
        </Button>
        <Button variant="outline" onClick={() => router.push("/account/orders")}>
          View Orders
        </Button>
      </div>
    </div>
  );
}