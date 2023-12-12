import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns w-full flex flex-row justify-center items-center space-x-8">
      <button
        className="custom-swiper-prev outline-none"
        onClick={() => swiper.slidePrev()}
      />
      <button
        className="custom-swiper-next"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};
