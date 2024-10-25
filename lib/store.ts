"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/lib/dummy-data";

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  total: number;
  shippingCost: number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      shippingCost: 10,
      subtotal: 0,
      total: 0,
      addToCart: (product: Product, quantity = 1) => {
        const cart = get().cart;
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          set({ cart: updatedCart });
        } else {
          set({ cart: [...cart, { ...product, quantity }] });
        }

        // Update totals
        const newSubtotal = get().cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({
          subtotal: newSubtotal,
          total: newSubtotal + get().shippingCost,
        });
      },
      removeFromCart: (productId: string) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
        
        // Update totals
        const newSubtotal = get().cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({
          subtotal: newSubtotal,
          total: newSubtotal + get().shippingCost,
        });
      },
      updateQuantity: (productId: string, quantity: number) => {
        const cart = get().cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        );
        set({ cart });

        // Update totals
        const newSubtotal = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        set({
          subtotal: newSubtotal,
          total: newSubtotal + get().shippingCost,
        });
      },
      clearCart: () => {
        set({ cart: [], subtotal: 0, total: 0 });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);