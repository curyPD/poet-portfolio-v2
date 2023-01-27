import { config } from "./config";
import { createClient } from "next-sanity";
import { homePageAuthorQuery } from "./sanity.queries";

export const sanityClient = createClient(config);

export async function getHomePageAuthor() {
    return await sanityClient.fetch(homePageAuthorQuery);
}
