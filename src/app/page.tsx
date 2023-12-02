"use client";
import AddressAndOpenTime from "@/components/Cards/AddressAndOpenTime";
import MainContainer from "@/components/Containers/MainContainer";
import AnimalsIntroSection from "@/components/Sections/Home/AnimalsIntro";
import MainBanner from "@/components/Sections/Home/MainBanner";
import PopularActivities from "@/components/Sections/Home/PopularActivities";
import PriceSection from "@/components/Sections/Home/PriceSection";
import SectionIntro from "@/components/Sections/IntroWithOnePicture";

import CustomerReviews from "@/components/Sections/Home/CustomerReviews";

import BG1 from "../../public/assets/backgrounds//home/home-bg1.png";
import Animals1 from "../../public/assets/images/animals/animals1.png";
import Icon1 from "../../public/assets/images/section-icons/icon1.png";

const OverallSection = () => {
  return (
    <MainContainer background={BG1.src} animation>
      <AddressAndOpenTime />
      <SectionIntro
        title="Tổng Quan về ZooDoo Đà Lạt"
        description="Thành lập vào năm 2015, ZooDoo Đà Lạt đã trở thành điểm đến lý tưởng cho những người đam mê động vật. Với mô hình thân thiện tiêu chuẩn Úc duy nhất tại Việt Nam, chúng tôi mang đến những trải nghiệm độc đáo và đáng nhớ với thế giới động vật."
        icon={Icon1.src}
        picture={Animals1.src}
      />
    </MainContainer>
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
