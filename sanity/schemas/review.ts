export const reviewSchema = {
  name: "review",
  title: "Bewertungen",
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
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "rating",
      title: "Bewertung (1-5)",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: "text",
      title: "Bewertungstext",
      type: "text",
    },
    {
      name: "publishedAt",
      title: "Datum",
      type: "datetime",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "customerSlug" },
  },
};
