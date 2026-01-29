import { Vendor } from "@/types/vendor";
export const vendors: Vendor[] = [
  {
    id: "1",
    slug: "cool-shoes",
    name: "CoolShoes",
    logo: "Footprints",
    heroImage: ["/images/shoes.png", "/images/shoes1.png"],
    description: "Trendy, comfortable footwear designed for everyday style.",
    featured: true,
  },
  {
    id: "2",
    slug: "gadget-world",
    name: "GadgetWorld",
    logo: "Tv",
    heroImage: ["/images/gadget.png", "/images/gadget1.png"],
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
    heroImage: ["/images/gadget1.jpg", "/images/gadget1.jpg"],
    description:
      "Shop latest and trendy Tools and gear for designers, artists, and creators.",
    featured: true,
  },
];
