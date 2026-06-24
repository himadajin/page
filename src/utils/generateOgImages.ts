import { Resvg } from "@resvg/resvg-js";
import referenceOgImage from "./og-templates/reference";
import siteOgImage from "./og-templates/site";
import type { ReferenceEntry } from "./references";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForReference(props: {
  entry: ReferenceEntry;
}) {
  const svg = await referenceOgImage(props.entry);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}
