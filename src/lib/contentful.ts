import { createClient } from "contentful";
import { IHiringJobSkeleton, INewsSkeleton } from "@/types/contentful";

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

export const getHiringJobs = async () => {
  try {
    const response = await initContentfulClient.getEntries({
      content_type: "hiring",
      order: ["-sys.createdAt"],
    });
    return response;
  } catch {
    throw new Error("Error fetching hiring jobs");
  }
};

export const getHiringJobBySlug = async (slug: string) => {
  try {
    const queryOptions = {
      content_type: "hiring" as "hiring",
      "fields.slug[match]": slug,
    };
    const response = await initContentfulClient.getEntries<IHiringJobSkeleton>(
      queryOptions
    );
    const hiringJob = response.items[0];
    return hiringJob;
  } catch {
    throw new Error("Error fetching blog post");
  }
};
