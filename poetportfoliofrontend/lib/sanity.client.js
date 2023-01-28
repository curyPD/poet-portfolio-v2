import { config } from "./config";
import { createClient } from "next-sanity";
import {
    homePageQuery,
    certificatesPageQuery,
    accordionCategoriesQuery,
    accordionPoemsQuery,
    poemPaths,
    poemBySlugQuery,
} from "./sanity.queries";

export const sanityClient = createClient(config);

export async function getHomePage() {
    return await sanityClient.fetch(homePageQuery);
}

export async function getCertificatesPage() {
    return await sanityClient.fetch(certificatesPageQuery);
}

export async function getAccordionCategories() {
    return await sanityClient.fetch(accordionCategoriesQuery);
}

export async function getAccordionPoems() {
    return await sanityClient.fetch(accordionPoemsQuery);
}

export async function getPoemPaths() {
    return await sanityClient.fetch(poemPaths);
}

export async function getPoem(slug) {
    return await sanityClient.fetch(poemBySlugQuery, { slug });
}
