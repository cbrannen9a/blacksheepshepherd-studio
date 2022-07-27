export default {
  type: "object",
  name: "imageSection",
  title: "Image Section",
  fieldsets: [{ name: "image", title: "Image" }],
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      description:
        "Description of section for example: header, welcome or image",
      initialValue: "Image",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      fieldset: "image",
      options: {
        collapsed: false,
      },
    },
    {
      title: "Caption",
      name: "caption",
      type: "string",
      fieldset: "image",
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessibility.",
      fieldset: "image",
    },
    {
      name: "link",
      type: "link",
      title: "Link",
    },
    {
      name: "text",
      type: "portableText",
      title: "Text (optional)",
    },
  ],
  preview: {
    select: {
      title: "label",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: `Image: ${title}`,
        subtitle: "Image section",
        media,
      };
    },
  },
};
