export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", "create", /* 'delete', */ "publish"],
  fieldsets: [{ name: "copyright", title: "Copyright" }],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "siteUrl",
      type: "string",
      title: "Site URL",
      description: "Alter with caution as effects sitemaps and rss feeds",
    },
    {
      name: "brand",
      type: "image",
      title: "Brand",
    },
    {
      type: "color",
      name: "primaryColor",
      title: "Primary color",
    },
    {
      type: "color",
      name: "secondaryColor",
      title: "Secondary color",
    },
    {
      type: "color",
      name: "accentColor",
      title: "Accent color",
      description: "Used for Links, Menu and highlights",
    },
    {
      type: "color",
      name: "backgroundColor",
      title: "Background color",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "mainNav",
      type: "array",
      title: "Main Nav",
      of: [
        {
          type: "reference",
          to: { type: "route" },
        },
      ],
    },
    {
      name: "footerNav",
      type: "array",
      title: "Footer Nav",
      of: [
        {
          type: "reference",
          to: { type: "route" },
        },
      ],
    },
    {
      name: "footerText",
      type: "portableText",
      title: "Footer Text",
    },
    {
      name: "copyrightText",
      type: "string",
      title: "Copyright Text",
      fieldset: "copyright",
    },
    {
      name: "copyrightLink",
      type: "link",
      title: "Copyright Link",
      fieldset: "copyright",
    },
  ],
};
