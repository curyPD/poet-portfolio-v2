import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity.client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return builder.image(source);
}

export function getDimensions(assetRef) {
    const [width, height] = assetRef.split("-").at(2).split("x");
    return [width, height];
}
