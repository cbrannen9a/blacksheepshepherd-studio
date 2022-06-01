export default {
  type: "object",
  name: "imageSection",
  title: "Image Section",
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
      type: "figure",
      title: "Image",
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
