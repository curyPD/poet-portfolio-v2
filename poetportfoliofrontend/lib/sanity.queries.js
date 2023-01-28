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
    *[_type == 'category'] | order(_createdAt) {
        _id,
        title,
        slug
    }
`;

export const accordionPoemsQuery = groq`
    *[_type == 'poem']{
        _id,
        title,
        slug,
        'categorySlug': category->slug
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
