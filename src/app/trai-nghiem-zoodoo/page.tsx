"use client";

import ImageGrid13 from "@/components/Grid/ImageGrid13";
import ImageGrid33 from "@/components/Grid/ImageGrid33";

import MainContainer from "@/components/Containers/MainContainer";
import AnimalInteraction from "@/components/Sections/Experiences/AnimalInteraction";
import EatingAndShopping from "@/components/Sections/Experiences/EatingAndShopping";
import ZooKeeperSharing from "@/components/Sections/Experiences/ZooKeeperSharing";
import SectionTitle from "@/components/common/SectionTitle";

import BannerImage from "@/../public/assets/backgrounds/tin-tuc-va-hoat-dong/bg.png";
import Icon5 from "@/../public/assets/images/section-icons/icon5.png";
import CheckInWithStatue from "@/components/Sections/Experiences/CheckInWithStatue";

const Experiences = () => {
  return (
    <div className="flex flex-col pt-36">
      <MainContainer background={BannerImage.src}>
        <SectionTitle
          icon={Icon5.src}
          title={"CÁC LOÀI ĐỘNG VẬT Ở ZOODOO"}
          description={
            "ZooDoo Đà Lạt sở hữu các loài động vật rất hiếm thấy tại Việt Nam. Những loài vật này hiện đang được bảo tồn trong môi trường sống tự nhiên, phù hợp với tập tính và nếp sống của chúng. Đây là những loài vật chủ yếu sống ở môi trường ôn đới. Do đó, Đà Lạt với khí hậu thiên nhiên ôn hòa, đã trở thành ngôi nhà lý tưởng cho những loài vật đáng yêu này."
          }
        />
        <ImageGrid13 />
        <ImageGrid33 />
        <ImageGrid33 />
      </MainContainer>

      <AnimalInteraction />
      <ZooKeeperSharing />
      <CheckInWithStatue />
      <EatingAndShopping />
    </div>
  );
};

export default Experiences;
