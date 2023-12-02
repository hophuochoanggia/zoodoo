"use client";
import React from "react";

import MainContainer from "@/components/Containers/MainContainer";
import NewsSwiper from "@/components/Sections/NewsAndActivities/NewsSwiper";
import NewGridAndPagination from "@/components/Sections/NewsAndActivities/NewGridAndPagination";

import BannerImage from "@/../public/assets/backgrounds/news/bg1.png";
import BG2 from "@/../public/assets/backgrounds/news/bg2.png";

const NewsAndActivitiesPage = () => {
  return (
    <div className="flex flex-col">
      <MainContainer background={BannerImage.src}>
        <NewsSwiper />
      </MainContainer>

      <MainContainer background={BG2.src}>
        <NewGridAndPagination />
      </MainContainer>
    </div>
  );
};

export default NewsAndActivitiesPage;
