export const projectSchema = {
  name: "project",
  title: "Projekte",
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
      name: "description",
      title: "Beschreibung",
      type: "text",
    },
    {
      name: "category",
      title: "Kategorie",
      type: "string",
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Datum",
      type: "datetime",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "customerSlug", media: "image" },
  },
};
