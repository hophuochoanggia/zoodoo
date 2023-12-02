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
        <div className="flex flex-col ">
          <h1 className="lg:text-6xl  text-4xl font-bold w-11/12 lg:w-2/3 leading-tight">
            VƯỜN THÚ THÂN THIỆN CHUẨN ÚC ĐẦU TIÊN TẠI VIỆT NAM
          </h1>
          <div className="py-8">
            <CTAButton
              text="ĐẶT CHỖ NGAY"
              bgColor="orange"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
