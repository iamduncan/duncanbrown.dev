import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/lib/sanity/config";

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: any): {src: string; width: number; height: number} => {
  if (!source || !source.asset) return { src: "", width: 0, height: 0 };
  const dimensions = source?.asset?._ref.split("-")[2];

  const [width, height] = dimensions
    .split("x")
    .map((num: string) => parseInt(num, 10));

  const url = imageBuilder
    .image(source)
    .auto("format")
    .width(Math.min(width, 2000))
    .url();

  return {
    src: url || "",
    width: width || 0,
    height: height || 0,
  };
};