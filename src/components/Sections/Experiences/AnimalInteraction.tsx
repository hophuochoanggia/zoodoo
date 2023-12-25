"use client";
import MainContainer from "@/components/Containers/MainContainer";
import CenteredAndLargeActive from "@/components/Swiper/CenteredAndLargeActive";
import SectionTitle from "@/components/common/SectionTitle";

import BgImage1 from "@/../public/assets/backgrounds/tin-tuc-va-hoat-dong/bg1.png";
import Icon12 from "@/../public/assets/images/section-icons/icon12.png";

const data = [
  {
    image: "/assets/images/experience/experience3.png",
    description:
      "Làm quen với những loài vật đáng yêu như cừu alpacas, loài vật chỉ thường sống ở một số nước ôn đới.",
  },
  {
    image: "/assets/images/experience/experience4.png",
    description: "Tận tay cho những chú Đà điểu ăn.",
  },
  {
    image: "/assets/images/experience/experience5.png",
    description: "Cơ hội để chụp ảnh với những bạn thú đặc biệt nhiều màu sắc.",
  },
];

const AnimalInteraction = () => {
  return (
    <MainContainer background={BgImage1.src}>
      <SectionTitle
        icon={Icon12.src}
        title={"TRẢI NGHIỆM TƯƠNG TÁC VỚI CÁC BẠN THÚ"}
        description={
          "Ở sở thú ZooDoo, không chỉ được tương tác với các bạn thú đáng yêu, mà còn có thể biết thêm nhiều kiến thức mới về môi trường sống của các loài vật này. Bạn có thể vừa tương tác, vừa cho ăn và chụp ảnh với các bạn thú đáng yêu."
        }
      />
      <CenteredAndLargeActive slides={data} />
    </MainContainer>
  );
};

export default AnimalInteraction;
