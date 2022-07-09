import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import * as prismicNext from "@prismicio/next";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

export const endpoint = sm.apiEndpoint;
export const repositoryName = new URL(sm.apiEndpoint).hostname.split(".")[0];

// Update the Link Resolver to match your project's route structure

export function linkResolver(doc) {
  switch (doc.type) {
    case "about":
      return "/about";
    case "projects":
      return `projects/${doc.uid}`;
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config?.previewData,
    req: config?.req,
  });

  return client;
}
