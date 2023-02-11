import { config } from "./config";
import { createClient } from "next-sanity";
import {
    homePageQuery,
    certificatesPageQuery,
    accordionCategoriesQuery,
    accordionPhilosophyPoemsQuery,
    accordionMotherlandPoemsQuery,
    accordionNaturePoemsQuery,
    accordionLovePoemsQuery,
    accordionMiscPoemsQuery,
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

export async function getAccordionPhilosophyPoems() {
    return await sanityClient.fetch(accordionPhilosophyPoemsQuery);
}

export async function getAccordionMotherlandPoems() {
    return await sanityClient.fetch(accordionMotherlandPoemsQuery);
}

export async function getAccordionNaturePoems() {
    return await sanityClient.fetch(accordionNaturePoemsQuery);
}

export async function getAccordionLovePoems() {
    return await sanityClient.fetch(accordionLovePoemsQuery);
}

export async function getAccordionMiscPoems() {
    return await sanityClient.fetch(accordionMiscPoemsQuery);
}

export async function getPoemPaths() {
    return await sanityClient.fetch(poemPaths);
}

export async function getPoem(slug) {
    return await sanityClient.fetch(poemBySlugQuery, { slug });
}
