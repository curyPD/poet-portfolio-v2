import { groq } from "next-sanity";

export const homePageQuery = groq`
    *[_type == 'author'][0]{
        bio,
        name,
        photo
    }
`;

export const certificatesPageQuery = groq`
    *[_type == 'certificate']{
        _id,
        image
    }
`;

export const accordionCategoriesQuery = groq`
    *[_type == 'category'] | order(index) {
        _id,
        title,
        slug
    }
`;

export const accordionPhilosophyPoemsQuery = groq`
    *[_type == 'poem' && references('6ae08fbb-92a4-4681-a011-3b607024c32e')] | order(index) {
        _id,
        title,
        slug,
    }
`;

export const accordionMotherlandPoemsQuery = groq`
    *[_type == 'poem' && references('de83ebf9-3968-40e1-b62d-8c6a1f29c330')] | order(index) {
        _id,
        title,
        slug,
    }
`;

export const accordionNaturePoemsQuery = groq`
    *[_type == 'poem' && references('3db05494-b3af-4154-9ee1-0b7de83496d0')] | order(index) {
        _id,
        title,
        slug,
    }
`;

export const accordionLovePoemsQuery = groq`
    *[_type == 'poem' && references('477d9e9b-d36d-4be1-9c5a-82ca13c09daf')] | order(index) {
        _id,
        title,
        slug,
    }
`;

export const accordionMiscPoemsQuery = groq`
    *[_type == 'poem' && references('8cf8ff8d-4672-4933-bd94-f2061e0d7d52')] | order(index) {
        _id,
        title,
        slug,
    }
`;

export const poemPaths = groq`
    *[_type == 'poem' && slug.current != null].slug.current
`;

export const poemBySlugQuery = groq`
    *[_type == 'poem' && slug.current == $slug][0]{
        _id,
        title,
        content
    }
`;
