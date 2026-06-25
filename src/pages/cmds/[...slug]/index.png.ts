import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "@/config";
import {
  getReferencePath,
  isIndexEntry,
  toReferenceItem,
  type ReferenceEntry,
} from "@/utils/references";
import { generateOgImageForReference } from "@/utils/generateOgImages";

export async function getStaticPaths() {
  if (!SITE.dynamicOgImage) {
    return [];
  }

  const entries = await getCollection("cmds");

  return entries
    .filter(entry => !isIndexEntry(entry) && !entry.data.ogImage)
    .map(entry => ({
      params: { slug: getReferencePath("cmds", entry.id, false) },
      props: toReferenceItem("cmds", entry),
    }));
}

export const GET: APIRoute = async ({ props }) => {
  if (!SITE.dynamicOgImage) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const buffer = await generateOgImageForReference(
    props as { entry: ReferenceEntry }
  );
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
