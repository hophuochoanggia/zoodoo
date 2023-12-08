import React, { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

interface ICenteredAndLargeActiveProps {
  slides: {
    image: string;
    description?: string;
  }[];
}

const CenteredAndLargeActive: FC<ICenteredAndLargeActiveProps> = ({
  slides,
}) => {
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
            <figure className="h-full w-full">
              <Image
                width={1000}
                height={500}
                src={slide.image}
                alt="slide"
                className="rounded-[10px]"
              />
              {slide?.description && (
                <figcaption className="text-center text-sm lg:text-xl font-medium px-4 lg:px-0 py-4">
                  {slide.description}
                </figcaption>
              )}
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CenteredAndLargeActive;
