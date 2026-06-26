import { Product } from "./types";

export const CATEGORIES = [
  {
    name: "Modern Sofas",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=600&q=80",
    description: "Sculptural loungers and deep-seated comfort."
  },
  {
    name: "Dining Tables",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=600&q=80",
    description: "Solid live-edge wood slabs and stone statement pieces."
  },
  {
    name: "Luxury Beds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    description: "Floating platforms and dramatic velvet headboards."
  },
  {
    name: "Office Furniture",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
    description: "Commanding executive desks and ergonomic seating."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "emerson-boucle-sofa",
    title: "Emerson Bouclé Sofa",
    collection: "Collection № 08 / L'Horizon",
    category: "Modern Sofas",
    price: 3450,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    description: "A sculptural masterpiece featuring organic curves, premium bouclé upholstery, and a low-profile aesthetic. Designed for deep lounge comfort and refined luxury, the Emerson Sofa forms the perfect anchor for the modern living space.",
    material: "Solid Maple Frame, Premium Bouclé Fabric",
    dimensions: "H: 72cm x W: 240cm x D: 110cm",
    origin: "Tuscany, Italy",
    woods: ["Natural Oak", "Walnut", "Matte Black Maple"],
    colors: ["Alabaster Cream", "Warm Sand", "Charcoal Gray"],
    fabrics: ["Bouclé", "Italian Linen", "Royal Velvet"],
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "Constructed with FSC-certified maple hardwood and OEKO-TEX® certified hypoallergenic padding. Woven in a carbon-neutral mill.",
    careInstructions: "Blot spills immediately with a clean, damp white cloth. Professional upholstery cleaning recommended annually.",
    features: [
      "Deep, resilient multi-density foam core",
      "Solid interlocking frame construction",
      "Removable cushions with invisible zipper detailing",
      "Understated recessed block feet"
    ]
  },
  {
    id: "bespoke-walnut-dining",
    title: "Bespoke Walnut Dining Table",
    collection: "Collection № 05 / Crafted Oak",
    category: "Dining Tables",
    price: 4200,
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80",
    description: "Crafted from a single slab of sustainable European walnut wood, featuring clean live-edges and architectural solid oak legs. An elegant centerpiece for contemporary dining spaces that highlights the raw, organic patterns of natural timber.",
    material: "FSC Solid European Walnut Wood",
    dimensions: "H: 76cm x W: 220cm x D: 100cm",
    origin: "Loire Valley, France",
    woods: ["Walnut", "Natural Oak", "Dark Stained Oak"],
    colors: ["Natural Satin Finish", "Matte Charcoal Finish"],
    fabrics: ["None"],
    images: [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "Crafted entirely from local wind-fallen walnut timber. Finished with plant-based zero-VOC hardwax oils.",
    careInstructions: "Dust regularly with a dry cloth. Use coasters for hot or wet items. Re-oil the surface once every two years to maintain luster.",
    features: [
      "One-of-a-kind organic grain lines",
      "Sturdy mortise-and-tenon joints",
      "Architectural reverse-beveled leg styling",
      "Expansion-friendly metal subframe underlay"
    ]
  },
  {
    id: "aurelia-velvet-bed",
    title: "Aurelia Velvet Platform Bed",
    collection: "Collection № 12 / Nightfall",
    category: "Luxury Beds",
    price: 5100,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    description: "Indulge in deep, restorative sleep. The Aurelia features a towering padded headboard in Italian velvet, framed by polished brass accents and a floating solid wood platform that creates an ethereal hovering appearance.",
    material: "Solid Pine Base, Italian Velvet Upholstery, Solid Brass Trim",
    dimensions: "H: 140cm x W: 210cm x D: 230cm (King size)",
    origin: "Milan, Italy",
    woods: ["Walnut", "Ebonized Ash"],
    colors: ["Rust Velvet", "Soft Cream Velvet", "Royal Navy Velvet"],
    fabrics: ["Royal Velvet", "Belgian Linen"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "Durable FSC certified timber core. Hand-woven velvet dyed using eco-friendly water-recycling methods.",
    careInstructions: "Lightly vacuum headboard with a soft brush attachment. Professional cleaning recommended for stains.",
    features: [
      "Extra-tall plush acoustic headboard paneling",
      "Stately brass inset border accents",
      "Premium heavy-duty support slats (no box spring required)",
      "Floating base frame styling"
    ]
  },
  {
    id: "aileron-walnut-desk",
    title: "Aileron Walnut Executive Desk",
    collection: "Collection № 03 / Workspace",
    category: "Office Furniture",
    price: 2800,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80",
    description: "Command your workspace with this striking minimalist desk. Features floating walnut drawer cabinets, integrated wireless charging beneath the leather writing pad, and sleek brushed steel supports.",
    material: "Solid Walnut, Top-Grain Aniline Leather, Brushed Stainless Steel",
    dimensions: "H: 75cm x W: 180cm x D: 85cm",
    origin: "Copenhagen, Denmark",
    woods: ["Walnut", "Blackened Oak"],
    colors: ["Saddle Brown Leather", "Obsidian Black Leather"],
    fabrics: ["Aniline Leather"],
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "Leather sourced from certified LWG gold-rated European tanneries. Fully recyclable steel support structure.",
    careInstructions: "Wipe with a slightly damp cloth. Avoid direct sunlight. Maintain leather with professional leather cream once a year.",
    features: [
      "Soft-close floating storage drawers",
      "Concealed cable management routing channel",
      "Embedded fast Qi wireless charging pad",
      "Premium stitched leather writing inlay"
    ]
  },
  {
    id: "serene-linen-armchair",
    title: "Serene Minimalist Armchair",
    collection: "Collection № 08 / L'Horizon",
    category: "Modern Sofas",
    price: 1650,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
    description: "A low-profile club chair with generous proportions. Featuring a curved natural wood backing and deep cushion seating wrapped in organic Belgian linen, designed to invoke peace and presence.",
    material: "Solid White Oak, Belgian Linen, Goose-Down Cushion Blend",
    dimensions: "H: 68cm x W: 95cm x D: 95cm",
    origin: "Antwerp, Belgium",
    woods: ["Natural Oak", "Walnut"],
    colors: ["Warm Beige Sand", "Alabaster Cream", "Sage Green"],
    fabrics: ["Belgian Linen", "Bouclé"],
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "100% natural, unbleached Belgian flax linen upholstery. Down padding collected through certified humane practices.",
    careInstructions: "Covers are removable and dry cleanable. Plump cushions regularly to redistribute filling.",
    features: [
      "Sculpted steam-bent white oak back shell",
      "Goose-down wrap over high-resilience core",
      "French seam tailoring detail",
      "Slightly reclined lounging angle"
    ]
  },
  {
    id: "travertine-plinth-table",
    title: "Travertine Plinth Coffee Table",
    collection: "Collection № 02 / Terra",
    category: "Dining Tables",
    price: 2100,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1200&q=80",
    description: "A structural monolith carved from honed Italian travertine stone. The cream-colored porous limestone presents natural sediment variations, making each table completely unique and sculptural.",
    material: "Honed Italian Classico Travertine",
    dimensions: "H: 30cm x W: 120cm x D: 70cm",
    origin: "Tivoli, Italy",
    woods: ["None"],
    colors: ["Honed Travertine", "Earthy Sand Travertine"],
    fabrics: ["None"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "Quarried and carved locally using closed-loop zero-waste water cutting equipment.",
    careInstructions: "Travertine is porous. Wipe immediately after any spills. Clean with stone-safe soap; do not use acidic cleaners.",
    features: [
      "Solid double-slab plinth support structures",
      "Hand-finished matte honed satin texture",
      "Unique natural unfilled pocket structures",
      "Heavyweight monolithic presence"
    ]
  },
  {
    id: "nordic-office-chair",
    title: "Nordic Ergonomic Office Chair",
    collection: "Collection № 03 / Workspace",
    category: "Office Furniture",
    price: 1100,
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    description: "Blending Scandinavian ergonomics with high-end luxury. Sleek molded plywood backing, breathable mesh and leather seat, with full pneumatic adjustment controls.",
    material: "Molded Birch Plywood, Top-grain Aniline Leather, Cast Aluminum",
    dimensions: "H: 95-105cm x W: 68cm x D: 68cm",
    origin: "Gothenburg, Sweden",
    woods: ["Oak Veneer", "Walnut Veneer"],
    colors: ["Saddle Brown Leather", "Obsidian Black Leather"],
    fabrics: ["Aniline Leather"],
    images: [
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "98% recyclable components. Cast aluminum base made from 80% post-consumer recycled metal.",
    careInstructions: "Wipe wood veneer with microfiber cloth. Treat leather elements periodically with leather oil.",
    features: [
      "Weight-activated synchronized tilt control",
      "Fully adjustable 3D leather armrests",
      "Molded veneer spine shell support",
      "High-durability soft-cast casters for hard floors"
    ]
  },
  {
    id: "astrid-sleep-oasis",
    title: "Astrid Sleep Oasis Bed",
    collection: "Collection № 12 / Nightfall",
    category: "Luxury Beds",
    price: 6400,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    hoverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description: "A minimalist bed frame wrapped in breathable, organic cotton-linen blend. Supported by micro-legs that create an elegant floating illusion, complete with matching floating bedside ledges.",
    material: "Solid Maple Frame, Cotton-Linen Fabric, Aluminum Micro-Legs",
    dimensions: "H: 110cm x W: 200cm x D: 225cm (Queen size)",
    origin: "Copenhagen, Denmark",
    woods: ["Walnut", "Natural Maple"],
    colors: ["Alabaster Cream", "Warm Sand"],
    fabrics: ["Cotton-Linen", "Belgian Linen"],
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    sustainability: "Wood harvested from local sustainable maple groves. Upholstery is dyed using botanical zero-chemical pigments.",
    careInstructions: "Vacuum clean with upholstery nozzle. Blot liquid stains immediately with absorbent white towel.",
    features: [
      "Integrated cantilevered floating bedside tables",
      "Low profile frame for clean visual lines",
      "Concealed steel reinforcement corner brackets",
      "Breathable posture-slat mattress support system"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Eleanora Sterling",
    role: "Architectural Designer, NY",
    quote: "The Emerson sofa redefined our entire loft workspace. The curvature is stunning, and the quality of the bouclé is second to none. Truly architectural art.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    name: "Julian Vance",
    role: "Collector & Curator",
    quote: "Finding furniture that respects traditional joinery while speaking a modern visual language is rare. The Bespoke Table is an heirloom-quality masterwork.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    name: "Beatriz Moreno",
    role: "Founder, Studio Moreno",
    quote: "LuxeLiving manages to blend Apple's detail-oriented design precision with Restoration Hardware's organic warmth. It's the ultimate quiet luxury brand.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  }
];
