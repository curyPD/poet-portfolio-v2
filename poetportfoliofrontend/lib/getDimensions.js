export function getDimensions(assetRef) {
    const [width, height] = assetRef.split("-").at(2).split("x");
    return [width, height];
}
