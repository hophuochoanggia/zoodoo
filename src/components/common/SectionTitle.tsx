import React, { FC } from "react";
import Image from "next/image";

interface ISectionTitleProps {
  icon: string;
  title: string;
  description?: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full">
      <div className="flex items-center">
        <Image src={icon} alt="Company Logo" width={80} height={80} />
      </div>
      <div className="font-bold text-4xl text-text-default w-[600px] text-center">
        {title}
      </div>
      {description && (
        <div className="text-base text-text-default text-center mx-24">
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
