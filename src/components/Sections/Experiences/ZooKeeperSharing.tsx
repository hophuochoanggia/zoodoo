import React from "react";

import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

import BgImage2 from "@/../public/assets/backgrounds/tin-tuc-va-hoat-dong/bg2.png";
import Icon7 from "@/../public/assets/images/section-icons/icon7.png";
import clsx from "clsx";
import Image from "next/image";

interface ISharingCard {
  description: string;
  author: string;
  image: string;
  imageSide: "right" | "left";
}

const SharingCard: React.FC<ISharingCard> = ({
  description,
  author,
  image,
  imageSide,
}) => {
  return (
    <div
      className={`flex flex-col gap-10 md:flex-row md:justify-between px-4 lg:px-0 ${
        imageSide === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden lg:block">
        <Image src={image} alt="sharing card image" width={400} height={200} />
      </div>
      <div className="flex lg:hidden flex-col items-center justify-center">
        <Image src={image} alt="sharing card image" width={300} height={200} />
      </div>
      <div
        className={clsx(
          "w-full md:w-1/2 flex flex-col justify-start",
          imageSide === "right" ? "md:justify-start" : "md:justify-end"
        )}
      >
        <p className="text-lg lg:text-xl font-normal leading-loose">
          {description}
        </p>
        <p className="text-xl lg:text-2xl font-semibold mt-4">
          {author} - Zookeeper
        </p>
      </div>
    </div>
  );
};

const data: ISharingCard[] = [
  {
    description:
      "Mình rất tự hào vì có cơ hội làm việc tại một vườn thú độc đáo mang phong cách Úc. Đây là một môi trường chuyên nghiệp, nơi mình đã học được nhiều kiến thức quan trọng về quản lý và chăm sóc động vật. Qua các khóa đào tạo, mình đã trang bị những kỹ năng cần thiết để làm việc hiệu quả với những loài động vật đa dạng. Là một zookeeper, công việc của mình không chỉ đơn thuần là chăm sóc động vật, mà còn là nhiệm vụ bảo vệ và giáo dục công chúng về tầm quan trọng của việc bảo tồn động vật hoang dã. Mình rất hạnh phúc và tự hào khi thấy khách tham quan đến vườn thú và có cơ hội tương tác gần gũi với các loài động vật. Điều này giúp mọi người hiểu và cảm nhận sự đa dạng và giá trị vô giá của tự nhiên.",
    author: "Phương Thảo",
    image: "/assets/images/experience/experience1.png",
    imageSide: "right",
  },
  {
    description:
      "Tôi đã có một trải nghiệm tuyệt vời tại ZooDoo Đà Lạt. Tôi đã được tương tác với các loài vật đáng yêu. Tôi đã được tham gia các hoạt động thú vị và học hỏi rất nhiều điều mới lạ.",
    author: "Quang Phát",
    image: "/assets/images/experience/experience2.png",
    imageSide: "left",
  },
];

const ZooKeeperSharing = () => {
  return (
    <MainContainer background={BgImage2.src}>
      <SectionTitle
        icon={Icon7.src}
        title={"CHIA SẺ CỦA ZOOKEEPER CHUYÊN NGHIỆP"}
      />
      <div className="flex flex-col gap-10 pb-72">
        {data.map((item, index) => (
          <SharingCard
            key={index}
            description={item.description}
            author={item.author}
            image={item.image}
            imageSide={item.imageSide}
          />
        ))}
      </div>
    </MainContainer>
  );
};

export default ZooKeeperSharing;
