export const postSchema = {
  name: "post",
  title: "Blog Posts",
  type: "document",
  fields: [
    {
      name: "customerSlug",
      title: "Kunde (Slug)",
      type: "string",
      description: "z.B. kunde-maler-berlin",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Kurzbeschreibung",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Hauptbild",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Inhalt",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "publishedAt",
      title: "Veröffentlicht am",
      type: "datetime",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "customerSlug", media: "mainImage" },
  },
};
