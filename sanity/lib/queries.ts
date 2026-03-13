import { sanityClient } from "./client";
import { siteConfig } from "@/config/siteConfig";

// customerSlug aus siteConfig ableiten
const customerSlug = siteConfig.companyName
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

// ── Projekte ──────────────────────────────────────────────────
export async function getProjects() {
  return sanityClient.fetch(`
    *[_type == "project" && customerSlug == $customerSlug] | order(publishedAt desc) {
      _id,
      title,
      description,
      category,
      "image": image.asset->url,
      publishedAt
    }
  `, { customerSlug });
}

// ── Leistungen ────────────────────────────────────────────────
export async function getServices() {
  return sanityClient.fetch(`
    *[_type == "service" && customerSlug == $customerSlug] | order(order asc) {
      _id,
      name,
      shortDesc,
      description,
      icon,
      "image": image.asset->url
    }
  `, { customerSlug });
}

// ── Bewertungen ───────────────────────────────────────────────
export async function getReviews() {
  return sanityClient.fetch(`
    *[_type == "review" && customerSlug == $customerSlug] | order(publishedAt desc) {
      _id,
      name,
      rating,
      text,
      publishedAt
    }
  `, { customerSlug });
}

// ── Blog Posts ────────────────────────────────────────────────
export async function getBlogPosts() {
  return sanityClient.fetch(`
    *[_type == "post" && customerSlug == $customerSlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "image": mainImage.asset->url,
      publishedAt
    }
  `, { customerSlug });
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(`
    *[_type == "post" && customerSlug == $customerSlug && slug.current == $slug][0] {
      _id,
      title,
      body,
      "image": mainImage.asset->url,
      publishedAt
    }
  `, { customerSlug, slug });
}
