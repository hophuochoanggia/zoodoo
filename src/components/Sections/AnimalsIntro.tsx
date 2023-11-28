import Image from "next/image";

import ImageGrid13 from "@/components/Grid/ImageGrid13";

import CTAButton from "@/components/Buttons/CTAButton/CTAButton";

import BG2 from "../../../public/assets/backgrounds/bg2.png";

interface IAnimalsIntroProps {
  svg: string;
  title: string;
  description: string;
  picture: string;
}

const AnimalsIntro = () => {
  return (
    <div className="flex flex-col items-start justify-center space-y-6 w-full">
      <div className="flex items-center">
        <Image
          src="/assets/images/icon5.png"
          alt="Company Logo"
          width={60}
          height={60}
        />
      </div>
      <div className="font-bold text-4xl text-text-default">
        Các loài động vật tại ZooDoo
      </div>
      <div className="w-4/5 text-text-default text-start py-4">
        Tại Zoodoo Dalat, bạn sẽ có cơ hội khám phá và tương tác với một loạt
        các loài động vật phong phú. Hãy đắm mình trong không gian xanh mát và
        gần gũi với thiên nhiên, và chiêm ngưỡng sự đa dạng của thế giới động
        vật
      </div>
      <ImageGrid13 />
      <div className="w-full flex flex-row items-center justify-center py-6">
        <CTAButton text="Xem thêm" onClick={() => {}} bgColor="green" />
      </div>
    </div>
  );
};

const AnimalsIntroSection = () => {
  return (
    <div
      className="bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-50px]"
      style={{
        backgroundImage: `url(${BG2.src})`,
      }}
    >
      <div className="flex flex-col items-center justify-center max-w-7xl space-y-20 py-28">
        <AnimalsIntro />
      </div>
    </div>
  );
};

export default AnimalsIntroSection;
