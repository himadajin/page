import type { MarkdownHeading } from "astro";

export type OutlineSection = {
  id: string;
  text: string;
  children: Array<{
    id: string;
    text: string;
  }>;
};

export const getOutlineSections = (
  headings: MarkdownHeading[]
): OutlineSection[] => {
  const sections: OutlineSection[] = [];
  let currentSection: OutlineSection | undefined;

  for (const heading of headings) {
    if (heading.depth === 2) {
      currentSection = {
        id: heading.slug,
        text: heading.text,
        children: [],
      };
      sections.push(currentSection);
    } else if (heading.depth === 3 && currentSection) {
      currentSection.children.push({
        id: heading.slug,
        text: heading.text,
      });
    }
  }

  return sections;
};

export const shouldShowOutline = (sections: OutlineSection[]): boolean =>
  sections.length >= 2;
