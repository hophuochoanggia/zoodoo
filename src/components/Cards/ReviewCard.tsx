import React from "react";

import Image from "next/image";

import CardBG from "../../../public/assets/backgrounds/review-bg.png";
import StarPng from "../../../public/assets/icons/star.png";

interface IReviewCardProps {
  user: string;
  description: string;
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

const ReviewCard = () => {
  return (
    <div
      className="w-[650px] bg-contain p-10 bg-no-repeat bg-center h-auto flex flex-col justify-center items-start "
      style={{
        backgroundImage: `url(${CardBG.src})`,
      }}
    >
      <FiveStarsReview />
      <div className="ml-1">
        <p className="mb-4 text-base lg:text-xl text-[#374151] font-medium">
          Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên
          đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham
          quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên
          trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác
          với mấy ẻm nên cảm giác rất gần gũi & mới lạ.
        </p>
        <p className=" text-xl font-bold"> Hồ Thị Khả Ngân</p>
      </div>
    </div>
  );
};

export default ReviewCard;
