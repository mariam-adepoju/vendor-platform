import { Vendor } from "@/types/vendor";
export const vendors: Vendor[] = [
  {
    id: "1",
    slug: "cool-shoes",
    name: "CoolShoes",
    logo: "Footprints",
    heroImage: ["/images/shoes.jpg", "/images/shoes1.jpg"],
    description: "Trendy, comfortable footwear designed for everyday style.",
    featured: true,
  },
  {
    id: "2",
    slug: "gadget-world",
    name: "GadgetWorld",
    logo: "Tv",
    heroImage: ["/images/gadget.webp", "/images/gadget.jpg"],
    description: "The latest gadgets, smart devices, and tech accessories.",
    featured: true,
  },
  {
    id: "3",
    slug: "home-essentials",
    name: "HomeEssentials",
    logo: "Lamp",
    heroImage: ["/images/essen.jpg", "/images/essen1.webp"],
    description: "Minimal, functional furniture and home accessories.",
  },
  {
    id: "4",
    slug: "creative-tools",
    name: "CreativeTools",
    logo: "Tablet",
    heroImage: ["/images/creative.jpg", "/images/creative1.jpg"],
    description:
      "Shop latest and trendy Tools and gear for designers, artists, and creators.",
    featured: true,
  },
];
