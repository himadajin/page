import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const fontPackageDir = dirname(
  require.resolve("@fontsource/ibm-plex-mono/package.json")
);

async function loadGoogleFonts(): Promise<
  Array<{ name: string; data: ArrayBuffer; weight: number; style: string }>
> {
  const fontsConfig = [
    {
      name: "IBM Plex Mono",
      path: "files/ibm-plex-mono-latin-400-normal.woff",
      weight: 400,
      style: "normal",
    },
    {
      name: "IBM Plex Mono",
      path: "files/ibm-plex-mono-latin-700-normal.woff",
      weight: 700,
      style: "normal",
    },
  ];

  return Promise.all(
    fontsConfig.map(async ({ name, path, weight, style }) => {
      const data = await readFile(join(fontPackageDir, path));
      return {
        name,
        data: data.buffer.slice(
          data.byteOffset,
          data.byteOffset + data.byteLength
        ),
        weight,
        style,
      };
    })
  );
}

export default loadGoogleFonts;
