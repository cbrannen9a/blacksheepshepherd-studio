import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { colorInput } from "@sanity/color-input";
import { structure } from "./deskStructure";

export default createConfig({
  name: "default",
  title: "Black Sheep Shepherd",

  projectId: "fichfc1s",
  dataset: "production",

  plugins: [deskTool({ structure }), colorInput()],

  schema: {
    types: schemaTypes,
  },
});
