"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function AdminSettings() {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    storeName: "VapeCommerce",
    storeDescription: "Premium vaping products and accessories",
    contactEmail: "support@vapecommerce.com",
    phoneNumber: "+1 (555) 123-4567",
    address: "123 Vape Street, Vapor City, VC 12345",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save to backend
    toast({
      title: "Settings updated",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Store Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="storeName" className="text-sm font-medium">
                Store Name
              </label>
              <Input
                id="storeName"
                value={settings.storeName}
                onChange={(e) =>
                  setSettings({ ...settings, storeName: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="storeDescription" className="text-sm font-medium">
                Store Description
              </label>
              <Textarea
                id="storeDescription"
                value={settings.storeDescription}
                onChange={(e) =>
                  setSettings({ ...settings, storeDescription: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contactEmail" className="text-sm font-medium">
                Contact Email
              </label>
              <Input
                id="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={(e) =>
                  setSettings({ ...settings, contactEmail: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                value={settings.phoneNumber}
                onChange={(e) =>
                  setSettings({ ...settings, phoneNumber: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="text-sm font-medium">
                Address
              </label>
              <Textarea
                id="address"
                value={settings.address}
                onChange={(e) =>
                  setSettings({ ...settings, address: e.target.value })
                }
              />
            </div>

            <Button type="submit">Save Changes</Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}