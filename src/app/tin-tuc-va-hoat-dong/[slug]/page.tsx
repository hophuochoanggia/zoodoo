import React from "react";

import MainContainer from "@/components/Containers/MainContainer";
import NewsBody from "@/components/Sections/NewsAndActivities/NewsBody";
import NewBanner from "@/components/Sections/NewsAndActivities/NewBanner";
import SimilarNews from "@/components/Sections/NewsAndActivities/SimilarNews";

import BannerImage from "@/../public/assets/backgrounds/news/bg3.png";

import { createClient } from "contentful";
import { INewsItem, INewsSkeleton } from "@/types/contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESSTOKEN ?? "",
});

const fetchBlogPost = async (slug: string): Promise<INewsItem> => {
  const queryOptions = {
    content_type: "news" as "news",
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries<INewsSkeleton>(queryOptions);
  return queryResult.items[0];
};

const NewsAndActivitiesPage = async ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  const article = await fetchBlogPost(slug);
  return (
    <div className="flex flex-col">
      <MainContainer background={BannerImage.src}>
        <NewBanner content={article} />
      </MainContainer>
      <MainContainer className="pt-6 lg:pt-20">
        <NewsBody content={article} />
      </MainContainer>
      {/* <MainContainer>
        <SimilarNews />
      </MainContainer> */}
    </div>
  );
};

export default NewsAndActivitiesPage;

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "news",
    select: "fields.slug",
  };
  const articles = await client.getEntries(queryOptions);
  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }));
}
