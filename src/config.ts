export const SITE = {
  website: "https://himadajin.github.io/page/", // replace this with your deployed domain
  author: "himadajin",
  profile: "https://github.com/himadajin/",
  desc: "技術資料とか、メモ書きとか",
  title: "page",
  ogImage: "astropaper-og.jpg",
  editLink: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/himadajin/page/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ja", // html lang code. Set this empty and default will be "en"
} as const;

export const SECTIONS = [
  {
    id: "cmds",
    label: "Commands",
    path: "/cmds",
    dataPath: "src/data/cmds",
  },
  {
    id: "prompts",
    label: "Prompts",
    path: "/prompts",
    dataPath: "src/data/prompts",
  },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
