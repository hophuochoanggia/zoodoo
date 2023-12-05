import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";
import CenteredAndLargeActive from "@/components/Swiper/CenteredAndLargeActive";

import BgImage5 from "@/../public/assets/backgrounds/tin-tuc-va-hoat-dong/bg5.png";
import Icon3 from "@/../public/assets/images/section-icons/icon3.png";

const EatingAndShopping = () => {
  return (
    <MainContainer background={BgImage5.src}>
      <SectionTitle
        icon={Icon3.src}
        title={"KHU ĂN UỐNG VÀ MUA SẮM"}
        description={
          "Đến ZooDoo bạn sẽ tìm thấy một loạt lựa chọn đa dạng về món ăn và đồ uống. Có các quầy thức ăn nhanh với các món ăn đường phố hấp dẫn như bánh tráng nướng, bánh mì nóng hổi, hay các món ăn truyền thống đậm đà hương vị địa phương. Ngoài ra ZooDoo còn có cửa hàng bán quà lưu niệm, đồ thủ công và đồ handmade, nơi bạn có thể tìm thấy những món đồ độc đáo và đặc trưng của ZooDoo."
        }
      />
      <CenteredAndLargeActive />
    </MainContainer>
  );
};

export default EatingAndShopping;
