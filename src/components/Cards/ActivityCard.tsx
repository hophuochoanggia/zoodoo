import React, { FC } from "react";

import Image from "next/image";

interface IActivityCardProps {
  title: string;
  description: string;
  image: string;
}

const ActivityCard: FC<IActivityCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full h-[300px] md:h-[500px] relative">
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div
        className="flex flex-col item-center
       lg:items-start justify-center lg:w-full pl-3"
      >
        <h1 className="text-2xl font-bold text-text-title">{title}</h1>
        <div className="w-1/3 border my-2 border-[#14532D]" />
        <p className="text-xl text-text-description">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
