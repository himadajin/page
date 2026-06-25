import { slugifyStr } from "./slugify";
import type { ReferenceItem } from "./references";

interface Tag {
  tag: string;
  tagName: string;
}

const getUniqueTags = (items: ReferenceItem[]) => {
  const tags: Tag[] = items
    .flatMap(item => item.entry.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

export default getUniqueTags;
