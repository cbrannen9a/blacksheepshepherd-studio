import { Rule } from "sanity";

export default {
  name: "route",
  title: "Route",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }: { title: string; slug: string }) {
      return { title: title, subtitle: `/${slug ? slug : ""}` };
    },
  },
};
