import { createClient } from "@sanity/client";
import { siteConfig } from "@/config/siteConfig";

export const sanityClient = createClient({
  projectId: siteConfig.sanity.projectId,
  dataset: siteConfig.sanity.dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const previewClient = createClient({
  projectId: siteConfig.sanity.projectId,
  dataset: siteConfig.sanity.dataset,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
