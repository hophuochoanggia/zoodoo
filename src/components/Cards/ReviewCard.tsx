import React, { FC } from "react";

import Image from "next/image";

import CardBG from "../../../public/assets/backgrounds/review-bg.png";
import StarPng from "../../../public/assets/icons/star.png";

interface IReviewCardProps {
  review: {
    user: string;
    description: string;
  } & any;
}

const FiveStarsReview = () => {
  // 5 star on flex row
  return (
    <div className="flex items-center my-3">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Image key={i} src={StarPng} alt="star" className="w-8 h-8 m-1" />
        ))}
    </div>
  );
};

const ReviewCard: FC<IReviewCardProps> = ({
  review: { user, description },
}) => {
  return (
    <div
      className="w-[500px] lg:w-[650px] bg-contain p-10 bg-no-repeat bg-center h-[400px] flex flex-col justify-center items-start "
      style={{
        backgroundImage: `url(${CardBG.src})`,
      }}
    >
      <FiveStarsReview />
      <div className="ml-1">
        <p className="mb-4 text-base lg:text-xl text-[#374151] font-medium">
          {description}
        </p>
        <p className=" text-xl font-bold">{user}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
