export const serviceSchema = {
  name: "service",
  title: "Leistungen",
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
      name: "shortDesc",
      title: "Kurzbeschreibung",
      type: "string",
    },
    {
      name: "description",
      title: "Ausführliche Beschreibung",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon (Lucide Name)",
      type: "string",
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "order",
      title: "Reihenfolge",
      type: "number",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "customerSlug", media: "image" },
  },
};
