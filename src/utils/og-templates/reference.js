import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

// Terminal surface tokens shared with the site's code block design
const TERMINAL = "#101010";
const TERMINAL_BORDER = "#282828";
const MUTE = "#7d8187";
const CURSOR = "#ffc799";

export default async reference => {
  const title = reference.data.title;
  const sectionLabel =
    `${SITE.title} / ${reference.collection ?? ""}`.toUpperCase();
  const site = new URL(SITE.website);
  const footerLeft = `${site.hostname}${site.pathname.replace(/\/$/, "")}`;
  const footerRight = SITE.author;

  return satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          width: "100%",
          height: "100%",
          background: TERMINAL,
          padding: "40px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                border: `1px solid ${TERMINAL_BORDER}`,
                padding: "52px 60px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontFamily: "Geist Mono",
                      fontSize: 26,
                      letterSpacing: "2px",
                      color: MUTE,
                    },
                    children: sectionLabel,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "flex-end",
                      maxHeight: "330px",
                      overflow: "hidden",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            fontFamily: "Geist",
                            fontWeight: 500,
                            fontSize: 72,
                            lineHeight: 1.15,
                            letterSpacing: "-1.5px",
                            color: "#ffffff",
                          },
                          children: title,
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            width: "22px",
                            height: "54px",
                            marginLeft: "18px",
                            marginBottom: "14px",
                            background: CURSOR,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "Geist Mono",
                      fontSize: 24,
                      color: MUTE,
                    },
                    children: [
                      {
                        type: "span",
                        props: { children: footerLeft },
                      },
                      {
                        type: "span",
                        props: { children: footerRight },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        title + sectionLabel + footerLeft + footerRight
      ),
    }
  );
};
