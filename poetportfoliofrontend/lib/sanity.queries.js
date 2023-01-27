import { groq } from "next-sanity";

export const homePageAuthorQuery = groq`
    *[_type == 'author'][0]{
        _id,
        bio,
        name,
        photo
    }
`;
