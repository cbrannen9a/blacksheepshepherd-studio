import {
  portableText,
  embedHTML,
  link,
  textSection,
  figure,
  imageSection,
} from "./objects";
import { page, route, siteSettings } from "./documents";

export const schemaTypes = [
  // documents
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
];
