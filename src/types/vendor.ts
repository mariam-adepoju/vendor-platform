export type VendorLogo = "Footprints" | "Tv" | "Lamp" | "Tablet";
export interface Vendor {
  id: string;
  slug: string;
  name: string;
  logo: VendorLogo;
  heroImage: string;
  description?: string;
  featured?: boolean;
}
