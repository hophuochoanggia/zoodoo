import MainContainer from "@/components/Containers/MainContainer";
import NewDetailsBanner from "@/components/Sections/NewsAndActivities/NewDetailsBanner";
import NewsBody from "@/components/Sections/NewsAndActivities/NewsBody";

import BannerImage from "@/../public/assets/backgrounds/news/bg3.png";

import { INewsItem, INewsSkeleton } from "@/types/contentful";
import { createClient } from "contentful";

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
        <NewDetailsBanner post={article} />
      </MainContainer>
      <MainContainer className="pt-6 lg:pt-20">
        <NewsBody post={article} />
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
