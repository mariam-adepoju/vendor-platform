##  Padisquare Multi-Vendor Mini Sites

 High-performance, SEO-optimized **multi-tenant storefront engine** built with the latest **Next.js App Router** features.  
This project enables vendors to have **independent, lightning-fast storefronts** under the Padisquare ecosystem while sharing a unified platform architecture.

 **Live Demo:** https://vendor-platform-chi.vercel.app 

##  Tech Stack

### Framework & Rendering
- **Next.js (App Router)**
- **Server Components** for data-driven rendering

### Performance & Optimization
- **React Compiler (auto-memoization)** to reduce unnecessary re-renders
- **Cache-aware components** for improved responsiveness

### UI & Styling
- **Tailwind CSS**
  - Custom brand color: `#159C47`
- **shadcn/ui** (Radix UI primitives)
- **Lucide React** icons with brand-specific mapping

## Data Fetching Strategy: Dynamic Server-Side Rendering
For this task, I implemented Server-Side Data Fetching directly within the [vendorSlug] page.

- SEO & Speed: By fetching data on the server, the initial HTML sent to the browser already contains the vendor details and product list. This is crucial for SEO and ensures a "Flash of Unstyled Content" (FOUC) never occurs.

- URL-Driven State: Search, sorting, and pagination are handled via searchParams. This makes every state shareable and ensures the browser's "Back" button works as expected.

- Safety: Credentials and internal logic remain on the server, never exposed to the client.

## Technical Expectations Met
 - App Router Architecture with dynamic routing
 - Multi-Tenant Routing: /site/[vendorSlug]
 - Advanced Search & Sorting: URL-driven filtering
 - Server-Side Pagination
 - SEO Metadata: Dynamic title & description per vendor
 - Responsive UI: Mobile-first TailwindCSS design
 - Brand Styling: Padisquare green (#159C47)
 - Dark Mode: System-aware with brand-tinted accents
 - Loading, Empty & Error States

## Getting Started
Clone the repository
```
git clone https://github.com/mariam-adepoju/vendor-platform.git
```
Install dependencies
```
npm install
```
Run the development server
```
npm run dev
```

Security & Isolation
All business logic and data access remain on the server, never exposed to the client.
