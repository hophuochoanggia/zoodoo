"use client";
import { motion } from "framer-motion";
import Booking from "@/components/Buttons/CTAButton/Booking";
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
          className="flex flex-col items-start justify-center w-full max-w-7xl h-1/2 2xl:h-full py-44 "
        >
          <div className="flex flex-col ">
            <p className="text-3xl lg:text-5xl 2xl:text-[64px] 2xl:leading-relaxed font-bold w-9/12 xl:w-7/12  leading-normal lg:leading-relaxed">
              VƯỜN THÚ THÂN THIỆN CHUẨN ÚC ĐẦU TIÊN
            </p>
            <p className="text-3xl lg:text-5xl 2xl:text-[64px] 2xl:leading-relaxed  font-bold leading-normal lg:leading-relaxed">
              TẠI VIỆT NAM
            </p>

            <div className="py-8">
              <Booking text="ĐẶT VÉ NGAY" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainBanner;
