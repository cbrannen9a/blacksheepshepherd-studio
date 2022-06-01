export default {
  type: "object",
  name: "textSection",
  title: "Text",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
      description:
        "Description of section for example: header, welcome or image",
      initialValue: "Text",
    },
    {
      name: "text",
      type: "portableText",
      title: "Text",
    },
  ],
  preview: {
    select: {
      label: "label",
    },
    prepare({ label }) {
      return {
        title: `${label}`,
        subtitle: "Text section",
      };
    },
  },
};
