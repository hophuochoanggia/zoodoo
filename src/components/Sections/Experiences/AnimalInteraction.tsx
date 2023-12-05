import MainContainer from "@/components/Containers/MainContainer";
import CenteredAndLargeActive from "@/components/Swiper/CenteredAndLargeActive";
import SectionTitle from "@/components/common/SectionTitle";

import BgImage1 from "@/../public/assets/backgrounds/tin-tuc-va-hoat-dong/bg1.png";
import Icon5 from "@/../public/assets/images/section-icons/icon5.png";

const AnimalInteraction = () => {
  return (
    <MainContainer background={BgImage1.src}>
      <SectionTitle
        icon={Icon5.src}
        title={"TRẢI NGHIỆM TƯƠNG TÁC VỚI CÁC BẠN THÚ"}
        description={
          "Ở sở thú ZooDoo, không chỉ được tương tác với các bạn thú đáng yêu, mà còn có thể biết thêm nhiều kiến thức mới về môi trường sống của các loài vật này. Bạn có thể vừa tương tác, vừa cho ăn và chụp ảnh với các bạn thú đáng yêu."
        }
      />
      <CenteredAndLargeActive />
    </MainContainer>
  );
};

export default AnimalInteraction;
