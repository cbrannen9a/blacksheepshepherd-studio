

import {
  portableText,
  embedHTML,
  link,
  textSection,
  figure,
  imageSection,
} from "./objects";
import { navigation, page, route, siteSettings } from "./documents";

export const schemaTypes = [ 
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
  ];
