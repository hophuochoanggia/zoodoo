"use client";
import AddressAndOpenTime from "@/components/Cards/AddressAndOpenTime";
import AnimalsIntroSection from "@/components/Sections/AnimalsIntro";
import IntroWithOnePicture from "@/components/Sections/IntroWithOnePicture";
import MainBanner from "@/components/Sections/MainBanner";
import PopularActivities from "@/components/Sections/PopularActivities";
import PriceSection from "@/components/Sections/PriceSection";

import CustomerReviews from "@/components/Sections/CustomerReviews";

import BG1 from "../../public/assets/backgrounds/bg1.png";
import Icon1 from "../../public/assets/images/icon1.png";
import Animals1 from "../../public/assets/images/animals1.png";

const OverallSection = () => {
  return (
    <div
      className="bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-50px] md:pb-20"
      style={{
        backgroundImage: `url(${BG1.src})`,
      }}
    >
      <div className="flex flex-col items-center justify-center max-w-7xl space-y-20 py-20">
        <AddressAndOpenTime />
        <IntroWithOnePicture
          title="Tổng Quan về ZooDoo Đà Lạt"
          description="Thành lập vào năm 2015, ZooDoo Đà Lạt đã trở thành điểm đến lý tưởng cho những người đam mê động vật. Với mô hình thân thiện tiêu chuẩn Úc duy nhất tại Việt Nam, chúng tôi mang đến những trải nghiệm độc đáo và đáng nhớ với thế giới động vật."
          icon={Icon1.src}
          picture={Animals1.src}
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col	max-w-screen ">
      <MainBanner />
      <OverallSection />
      <AnimalsIntroSection />
      <PopularActivities />
      <PriceSection />
      <CustomerReviews />
    </div>
  );
}
