import { useRef, useEffect } from "react";

import { useScroll, useTransform, motion } from "framer-motion";

import CTAButton from "@/components/Buttons/CTAButton/CTAButton";

import BannerImage from "../../../../public/assets/images/banner.jpg";

const MainBanner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center text-white py-24 object-cover h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${BannerImage.src})`,
      }}
    >
      <div className="flex flex-col items-start justify-center w-full max-w-7xl h-1/2 2xl:h-full py-44 2xl:py-0 px-10 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center w-full max-w-7xl h-1/2 2xl:h-full py-44 2xl:py-0 px-10 lg:px-0"
        >
          <div className="flex flex-col ">
            <p className="lg:text-5xl 2xl:text-6xl 2xl:leading-relaxed  text-4xl font-bold w-10/12 lg:w-3/5  leading-normal lg:leading-relaxed">
              VƯỜN THÚ THÂN THIỆN CHUẨN ÚC ĐẦU TIÊN TẠI VIỆT NAM
            </p>

            <div className="py-8">
              <CTAButton
                text="ĐẶT CHỖ NGAY"
                bgColor="orange"
                onClick={() => {}}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainBanner;
