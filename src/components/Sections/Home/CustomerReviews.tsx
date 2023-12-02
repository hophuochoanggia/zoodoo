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
    user: "Hồ Thị Khả Ngân",
    description:
      "Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác với mấy ẻm nên cảm giác rất gần gũi & mới lạ.",
  },
  {
    user: "Hồ Thị Khả Ngân",
    description:
      "Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác với mấy ẻm nên cảm giác rất gần gũi & mới lạ.",
  },
  {
    user: "Hồ Thị Khả Ngân",
    description:
      "Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác với mấy ẻm nên cảm giác rất gần gũi & mới lạ.",
  },
  {
    user: "Hồ Thị Khả Ngân",
    description:
      "Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác với mấy ẻm nên cảm giác rất gần gũi & mới lạ.",
  },
  {
    user: "Hồ Thị Khả Ngân",
    description:
      "Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác với mấy ẻm nên cảm giác rất gần gũi & mới lạ.",
  },
  {
    user: "Hồ Thị Khả Ngân",
    description:
      "Tuyệtttt vờiiiii! Một trải nghiệm thực sự rất thú vị & xứng đáng! Nên đi nhe mọi người ơi, vui lắm. Mình được các bạn hỗ trợ giờ giấc tham quan rất oke luôn, vì đi lần đầu nên không rành đường, lại có mưa nên trễ giờ (Zoo có xe đưa đón tại mình thích đi xe máy á). Được tương tác với mấy ẻm nên cảm giác rất gần gũi & mới lạ.",
  },
];

const getColumns = (width: number | undefined) => {
  if (width === undefined) return 3;
  if (width > 2560) return 5;
  if (width > 1496) return 3;
  if (width > 1024) return 2;
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
          className="mySwiper"
          spaceBetween={100}
          slidesPerGroup={1}
          loop={true}
          centeredSlides={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <ReviewCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;
