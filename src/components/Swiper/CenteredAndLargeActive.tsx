import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import useWindowSize from "@/hooks/useWindowSize";

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CenteredAndLargeActive = () => {
  const { width } = useWindowSize();
  console.log(width);
  return (
    <div className=" w-screen">
      <Swiper
        slidesPerView={1.5}
        breakpoints={{
          1920: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 1.5,
          },
        }}
        defaultValue={2}
        parallax={true}
        loop={true}
        className="custom-swiper"
        spaceBetween={0}
        slidesPerGroup={1}
        centeredSlides={true}
        slideToClickedSlide
        keyboard
        effect="creative"
        creativeEffect={{
          limitProgress: 2, // slides after 2nd before/after active will have same state
          prev: {
            opacity: 0.7,
            scale: 0.8,
            // will set `translateX(-90%)` on previous slides
            translate: ["-90%", 0, 0],
          },
          next: {
            opacity: 0.7,
            scale: 0.8,
            // will set `translateX(90%)` on next slides
            translate: ["90%", 0, 0],
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <figure>
              <img
                src="https://picsum.photos/id/623/1600/900"
                style={{
                  borderRadius: "10px",
                }}
              />
              <figcaption className="text-center py-4">Your caption here</figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CenteredAndLargeActive;
