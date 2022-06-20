import { Rule } from "sanity";

export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "route",
      title: "Page",
      type: "reference",
      to: [{ type: "route" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [{ type: "textSection" }, { type: "imageSection" }],
    },
  ],

  preview: {
    select: {
      title: "route.title",
    },
  },
};
