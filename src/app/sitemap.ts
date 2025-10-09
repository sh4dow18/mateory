// Sitemap Requirements
import { ROUTES_LIST } from "@/shared/config/routes";
import type { MetadataRoute } from "next";
// Sitemap Main Function
export default function sitemap(): MetadataRoute.Sitemap {
  // Returns Sitemap XML File
  return ROUTES_LIST.filter((route) => route.inSitemap).map((route, index) => ({
    url: `https://maitrofy.vercel.app/${route.path}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: index + 1,
  }));
}
