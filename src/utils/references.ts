import { getCollection, type CollectionEntry } from "astro:content";
import { SECTIONS, type SectionId } from "@/config";
import { slugifyStr } from "./slugify";

export type ReferenceEntry =
  | CollectionEntry<"cmds">
  | CollectionEntry<"prompts">;

export type ReferenceSection = (typeof SECTIONS)[number];

export type ReferenceItem = {
  entry: ReferenceEntry;
  href: string;
  section: ReferenceSection;
};

export function getSection(sectionId: SectionId) {
  return SECTIONS.find(section => section.id === sectionId);
}

export function isIndexEntry(entry: ReferenceEntry) {
  return entry.id === "index";
}

export function getReferencePath(
  sectionId: SectionId,
  id: string,
  includeBase = true
) {
  const section = getSection(sectionId);
  if (!section) {
    throw new Error(`Unknown reference section: ${sectionId}`);
  }

  const slug = id
    .split("/")
    .filter(Boolean)
    .map(segment => slugifyStr(segment))
    .join("/");

  const basePath = includeBase ? section.path : "";

  if (slug === "index") {
    return basePath || "/";
  }

  return [basePath, slug].filter(Boolean).join("/");
}

export function toReferenceItem(
  sectionId: SectionId,
  entry: ReferenceEntry
): ReferenceItem {
  const section = getSection(sectionId);
  if (!section) {
    throw new Error(`Unknown reference section: ${sectionId}`);
  }

  return {
    entry,
    href: getReferencePath(sectionId, entry.id),
    section,
  };
}

export async function getReferenceItems(): Promise<ReferenceItem[]> {
  const cmds = await getCollection("cmds");
  const prompts = await getCollection("prompts");

  return [
    ...cmds
      .filter(entry => !isIndexEntry(entry))
      .map(entry => toReferenceItem("cmds", entry)),
    ...prompts
      .filter(entry => !isIndexEntry(entry))
      .map(entry => toReferenceItem("prompts", entry)),
  ];
}
