/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  title: string;
  collection: string;
  category: "Dresses" | "Outerwear" | "Accessories" | "Footwear" | "Tailoring";
  price: number;
  image: string;
  hoverImage?: string;
  description: string;
  material: string;
  origin: string;
  sizes: string[];
  colors: string[];
  fabrics: string[];
  images?: string[]; // Gallery images
  sustainability?: string;
  careInstructions?: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export type ViewType = "home" | "shop" | "wishlist" | "product-detail" | "profile-cart";

export interface FilterState {
  size: string;
  color: string;
  fabric: string;
}
