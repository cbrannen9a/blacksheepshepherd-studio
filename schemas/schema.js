import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import {
  portableText,
  embedHTML,
  link,
  textSection,
  figure,
  imageSection,
} from "./objects";
import { navigation, page, route, siteSettings } from "./documents";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    // documents
    navigation,
    page,
    route,
    siteSettings,
    // objects
    portableText,
    embedHTML,
    link,
    textSection,
    figure,
    imageSection,
  ]),
});
