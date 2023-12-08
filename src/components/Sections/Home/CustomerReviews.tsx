"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ReviewCard from "@/components/Cards/ReviewCard";
import SectionTitle from "@/components/common/SectionTitle";

import BG5 from "../../../../public/assets/backgrounds/home/home-bg5.png";
import Icon2 from "../../../../public/assets/images/section-icons/icon2.png";

import useWindowSize from "@/hooks/useWindowSize";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    user: "Hồ Thị Khả Ngân",
    description:
      "Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác với mấy ẻm nên cảm giác rất gần gũi & mới lạ.",
  },
  {
    user: "Phạm Yun",
    description:
      "Điểm đến cực kỳ lý tưởng cho những ai yêu động vật. Thú được chăm sóc tốt, sạch sẽ, thân thiện với con người.Nhóm mình đã có một trải nghiệm tuyệt vời ở Zoodoo, có bạn dẫn đoàn tên Hoàng rất nhiệt tình và hiểu biết về các bé thú. Nhất định sẽ quay lại.",
  },
  {
    user: "Cao Thị Thanh Thảo",
    description:
      "Các bé thú dễ thương và thân thiện. Bạn tour guide tên Hoàng nhiệt tình và chu đáo, hiểu biết rộng về các bé thú. Đoàn mình đi có nhiều con nít nhưng bạn tour guide rất đáng yêu khi tương tác nói chuyện với các bé.",
  },
  {
    user: "Sơn Nguyễn",
    description:
      "Điểm đến cực kỳ lý tưởng cho những ai yêu động vật. Thú được chăm sóc tốt, sạch sẽ, thân thiện với con người. Nhóm mình đã có một trải nghiệm tuyệt vời ở Zoodoo.",
  },
  ,
];

const getColumns = (width: number | undefined) => {
  if (width === undefined) return 3;
  if (width > 1920) return 3.5;
  if (width > 1496) return 2.4;
  if (width > 1024) return 2;
  if (width > 768) return 1.5;
  return 1;
};

const CustomerReviews = () => {
  const { width } = useWindowSize();
  return (
    <div
      className="bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-40px] py-10 md:py-24"
      style={{
        backgroundImage: `url(${BG5.src})`,
      }}
    >
      <SectionTitle
        icon={Icon2.src}
        title={"Đánh giá của khách hàng về ZooDoo"}
      />
      <div className="flex flex-row items-center justify-center space-y-20 py-14 w-full ">
        <Swiper
          slidesPerView={getColumns(width)}
          navigation={true}
          modules={[Navigation]}
          className="swiper-with-nav"
          spaceBetween={100}
          slidesPerGroup={1}
          loop={true}
          centeredSlides={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
