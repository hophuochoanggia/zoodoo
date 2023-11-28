import React, { FC } from "react";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";

interface IIntroWithOnePictureProps {
  icon: string;
  title: string;
  description: string;
  picture: string;
}

const IntroWithOnePicture: FC<IIntroWithOnePictureProps> = ({
  icon,
  title,
  description,
  picture,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <SectionTitle icon={icon} title={title} description={description} />
      <div className="w-full h-[300px] md:h-[500px] relative">
        <Image
          src={picture}
          alt="Company Logo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default IntroWithOnePicture;
