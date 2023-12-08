import { createClient } from "contentful";
import { INewsSkeleton } from "@/types/contentful";

export const initContentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESSTOKEN ?? "",
});

export const getBlogPostsByCreatedAtService = async (
  page: number,
  limit: number
) => {
  try {
    const response = await initContentfulClient.getEntries<INewsSkeleton>({
      content_type: "news",
      // sort latest first
      order: ["-sys.createdAt"],
      skip: page === 0 ? 0 : (page - 1) * limit,
      limit: limit,
    });
    return response;
  } catch {
    throw new Error("Error fetching blog posts");
  }
};
