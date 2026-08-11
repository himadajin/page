// Fetches build-time font subsets from the Google Fonts API. The `text=`
// parameter trims each font to only the glyphs actually used, which keeps
// Japanese (Noto Sans JP) practical for OG rendering. Satori cannot read
// woff2, so we request TTF via a legacy user agent.
const FONT_SOURCES = [
  { name: "Geist", family: "Geist", weight: 400 },
  { name: "Geist", family: "Geist", weight: 500 },
  { name: "Geist Mono", family: "Geist Mono", weight: 400 },
  { name: "Noto Sans JP", family: "Noto Sans JP", weight: 400 },
  { name: "Noto Sans JP", family: "Noto Sans JP", weight: 500 },
] as const;

const TTF_USER_AGENT =
  "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+";

async function fetchFontData(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family.replaceAll(" ", "+")}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (
    await fetch(url, { headers: { "User-Agent": TTF_USER_AGENT } })
  ).text();

  const resource = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
  );
  if (!resource) {
    throw new Error(`Failed to resolve font resource: ${family} ${weight}`);
  }

  const response = await fetch(resource[1]);
  if (!response.ok) {
    throw new Error(`Failed to download font: ${family} ${weight}`);
  }
  return response.arrayBuffer();
}

async function loadGoogleFonts(
  text: string
): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const uniqueText = Array.from(new Set(text)).join("");

  return Promise.all(
    FONT_SOURCES.map(async ({ name, family, weight }) => ({
      name,
      weight,
      style: "normal",
      data: await fetchFontData(family, weight, uniqueText),
    }))
  );
}

export default loadGoogleFonts;
