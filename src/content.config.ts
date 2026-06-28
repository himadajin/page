import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { SECTIONS } from "@/config";

const cmds = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${SECTIONS[0].dataPath}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      ogImage: image().or(z.string()).optional(),
    }),
});

const prompts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${SECTIONS[1].dataPath}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      ogImage: image().or(z.string()).optional(),
    }),
});

export const collections = { cmds, prompts };
