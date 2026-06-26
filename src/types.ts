/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  title: string;
  collection: string;
  category: "Modern Sofas" | "Dining Tables" | "Luxury Beds" | "Office Furniture";
  price: number;
  image: string;
  hoverImage?: string;
  description: string;
  material: string;
  dimensions: string; // e.g. "H: 85cm x W: 240cm x D: 105cm"
  origin: string; // e.g. "Tuscany, Italy"
  woods?: string[]; // e.g. ["Natural Oak", "Walnut", "Charcoal Black"]
  colors?: string[]; // e.g. ["Cream", "Warm Beige", "Charcoal"]
  fabrics?: string[]; // e.g. ["Bouclé", "Italian Linen", "Velvet"]
  images?: string[]; // Gallery images
  sustainability?: string;
  careInstructions?: string;
  features?: string[]; // Special premium bullet points
}

export interface CartItem {
  product: Product;
  selectedWood: string;
  selectedColor: string;
  selectedFabric: string;
  quantity: number;
}

export type ViewType = "home" | "shop" | "wishlist" | "product-detail" | "profile-cart";

export interface FilterState {
  wood: string;
  color: string;
  fabric: string;
  category: string;
}

