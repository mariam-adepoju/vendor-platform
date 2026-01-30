import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Footer from "@/components/home/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://vendor-platform-chi.vercel.app/"
      : "http://localhost:3000"
  ),
  title: {
    default: "Padisquare | Discover Unique Vendor Stores",
    template: "%s | Padisquare",
  },
  description: "Generate and explore personalized storefronts for trendy shoes, tech gadgets, and home essentials.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Padisquare Marketplace",
    description: "The ultimate platform for multi-vendor storefronts.",
    siteName: "Padisquare",
    images: [
      {
        url: "/icons/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
