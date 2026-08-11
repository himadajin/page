import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

// Terminal surface tokens shared with the site's code block design
const TERMINAL = "#101010";
const TERMINAL_BORDER = "#282828";
const MUTE = "#7d8187";
const BODY = "#dadbdf";
const CURSOR = "#ffc799";

export default async () => {
  const site = new URL(SITE.website);
  const hostLabel =
    `${site.hostname}${site.pathname.replace(/\/$/, "")}`.toUpperCase();
  const footerLeft = SITE.author;

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
                    children: hostLabel,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            alignItems: "flex-end",
                          },
                          children: [
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  fontFamily: "Geist",
                                  fontWeight: 500,
                                  fontSize: 96,
                                  lineHeight: 1.05,
                                  letterSpacing: "-2px",
                                  color: "#ffffff",
                                },
                                children: SITE.title,
                              },
                            },
                            {
                              type: "div",
                              props: {
                                style: {
                                  display: "flex",
                                  width: "26px",
                                  height: "70px",
                                  marginLeft: "20px",
                                  marginBottom: "16px",
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
                            marginTop: "28px",
                            fontFamily: "Geist",
                            fontSize: 32,
                            color: BODY,
                          },
                          children: SITE.desc,
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
                      fontFamily: "Geist Mono",
                      fontSize: 24,
                      color: MUTE,
                    },
                    children: footerLeft,
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
        SITE.title + SITE.desc + hostLabel + footerLeft
      ),
    }
  );
};
