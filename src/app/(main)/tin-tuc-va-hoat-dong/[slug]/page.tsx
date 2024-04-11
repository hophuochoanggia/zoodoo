import { notFound } from "next/navigation";

import { POSTS_PER_PAGE } from "@/constants/contentful";

import MainContainer from "@/components/Containers/MainContainer";
import NewsBody from "@/components/Sections/NewsAndActivities/NewsBody";
import SimilarNews from "@/components/Sections/NewsAndActivities/SimilarNews";
import NewDetailsBanner from "@/components/Sections/NewsAndActivities/NewDetailsBanner";

import BannerImage from "@/../public/assets/backgrounds/news/bg3.png";

import { INewsItem, INewsSkeleton } from "@/types/contentful";
import {
  getBlogPostsByCreatedAtService,
  initContentfulClient,
} from "@/lib/contentful";

const fetchBlogPost = async (slug: string): Promise<INewsItem> => {
  const queryOptions = {
    content_type: "news" as "news",
    "fields.slug[match]": slug,
  };
  const queryResult = await initContentfulClient.getEntries<INewsSkeleton>(
    queryOptions
  );
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
  // get newest posts
  const newestPosts = await getBlogPostsByCreatedAtService(0, POSTS_PER_PAGE);

  if (!article) {
    return notFound();
  }
  return (
    <div className="flex flex-col">
      <MainContainer background={BannerImage.src}>
        <NewDetailsBanner post={article} />
      </MainContainer>
      <MainContainer className="pt-6 lg:pt-20">
        <NewsBody post={article} newestPosts={newestPosts} />
      </MainContainer>
      <MainContainer>
        <SimilarNews similarNews={newestPosts} />
      </MainContainer>
    </div>
  );
};

export default NewsAndActivitiesPage;

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "news",
    select: "fields.slug",
  };
  const articles = await initContentfulClient.getEntries(queryOptions);
  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }));
}
