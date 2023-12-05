"use client";
import React from "react";

import MainContainer from "@/components/Containers/MainContainer";
import NewsBody from "@/components/Sections/NewsAndActivities/NewsBody";
import NewBanner from "@/components/Sections/NewsAndActivities/NewBanner";
import SimilarNews from "@/components/Sections/NewsAndActivities/SimilarNews";

import BannerImage from "@/../public/assets/backgrounds/news/bg3.png";

const NewsAndActivitiesPage = ({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) => {
  return (
    <div className="flex flex-col">
      <MainContainer background={BannerImage.src}>
        <NewBanner />
      </MainContainer>
      <MainContainer>
        <NewsBody />
      </MainContainer>
      <MainContainer>
        <SimilarNews />
      </MainContainer>
    </div>
  );
};

export default NewsAndActivitiesPage;
