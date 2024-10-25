"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpCircle } from "lucide-react";

export function HelpGuide() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Platform Guide</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Welcome to the VapeCommerce platform prototype. This guide will help you
              navigate and understand all features available in this demo.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="customer">
                <AccordionTrigger>Customer Features</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Browse Products</h4>
                    <p className="text-sm text-muted-foreground">
                      - Visit the Products page to view all items
                      <br />
                      - Use filters to narrow down your search
                      <br />
                      - Click on products for detailed information
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Shopping Cart</h4>
                    <p className="text-sm text-muted-foreground">
                      - Add products to cart from any product page
                      <br />
                      - Access cart via the cart icon in header
                      <br />
                      - Adjust quantities or remove items
                      <br />
                      - Cart persists between sessions
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Checkout Process</h4>
                    <p className="text-sm text-muted-foreground">
                      - Enter shipping information
                      <br />
                      - Review order summary
                      <br />
                      - Enter payment details (demo only)
                      <br />
                      - Receive order confirmation
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="admin">
                <AccordionTrigger>Admin Access</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Login Credentials</h4>
                    <p className="text-sm text-muted-foreground">
                      Email: admin@vapecommerce.com
                      <br />
                      Password: admin123
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Admin Features</h4>
                    <p className="text-sm text-muted-foreground">
                      - Product management (add, edit, delete)
                      <br />
                      - Category management
                      <br />
                      - Store settings configuration
                      <br />
                      - View dashboard statistics
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="navigation">
                <AccordionTrigger>Navigation Guide</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Main Pages</h4>
                    <p className="text-sm text-muted-foreground">
                      - Home (/) - Landing page with featured products
                      <br />
                      - Products (/products) - Full product catalog
                      <br />
                      - Categories (/categories) - Browse by category
                      <br />
                      - Deals (/deals) - Special offers and discounts
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Admin Pages</h4>
                    <p className="text-sm text-muted-foreground">
                      - Dashboard (/admin) - Overview and statistics
                      <br />
                      - Products (/admin/products) - Manage products
                      <br />
                      - Categories (/admin/categories) - Manage categories
                      <br />
                      - Settings (/admin/settings) - Store configuration
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="features">
                <AccordionTrigger>Key Features</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">User Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      - Responsive design for all devices
                      <br />
                      - Dark/light mode toggle
                      <br />
                      - Real-time cart updates
                      <br />
                      - Persistent shopping cart
                      <br />
                      - Quick product search
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Product Features</h4>
                    <p className="text-sm text-muted-foreground">
                      - Detailed product pages
                      <br />
                      - Category filtering
                      <br />
                      - Price filtering
                      <br />
                      - Stock tracking
                      <br />
                      - Special deals section
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="demo">
                <AccordionTrigger>Demo Limitations</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    This is a prototype with simulated functionality:
                    <br />
                    - Payments are not processed
                    <br />
                    - Email notifications are not sent
                    <br />
                    - Data is not persisted between sessions
                    <br />
                    - Admin changes are temporary
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}