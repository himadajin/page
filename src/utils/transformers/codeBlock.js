const languageLabels = {
  bash: "Bash",
  dockerfile: "Dockerfile",
  makefile: "Makefile",
  md: "Markdown",
  shell: "Shell",
  typescript: "TypeScript",
};

function getLanguageLabel(language) {
  if (!language) return "Code";
  return languageLabels[language] ?? language;
}

function createIconPath(properties) {
  return {
    type: "element",
    tagName: "path",
    properties,
    children: [],
  };
}

function createCopyIcon() {
  return {
    type: "element",
    tagName: "svg",
    properties: {
      ariaHidden: "true",
      class: "size-3.5",
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      viewBox: "0 0 24 24",
    },
    children: [
      {
        type: "element",
        tagName: "rect",
        properties: {
          height: "14",
          rx: "2",
          ry: "2",
          width: "14",
          x: "8",
          y: "8",
        },
        children: [],
      },
      createIconPath({
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      }),
    ],
  };
}

export const transformerCodeBlock = () => ({
  name: "code-block-wrapper",
  pre(node) {
    const language = this.options.lang;

    node.properties.tabindex = "0";

    return {
      type: "element",
      tagName: "div",
      properties: {
        class: "code-block-wrapper",
      },
      children: [
        {
          type: "element",
          tagName: "div",
          properties: {
            class: "code-block-header",
          },
          children: [
            {
              type: "element",
              tagName: "span",
              properties: {
                class: "code-block-language",
              },
              children: [
                {
                  type: "text",
                  value: getLanguageLabel(language),
                },
              ],
            },
            {
              type: "element",
              tagName: "button",
              properties: {
                ariaLabel: "Copy code",
                class: "copy-code",
                dataState: "idle",
                title: "Copy code",
                type: "button",
              },
              children: [createCopyIcon()],
            },
          ],
        },
        node,
      ],
    };
  },
});
