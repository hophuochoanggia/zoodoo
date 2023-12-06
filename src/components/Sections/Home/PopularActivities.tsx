"use client";
import Image from "next/image";

import ActivityCard from "@/components/Cards/ActivityCard";

import BG3 from "../../../../public/assets/backgrounds/home/home-bg3.png";

const data = [
  {
    image: "/assets/images/activity1.png",
    title: "Thú vui với động vật",
    description: "Thú vui với động vật",
  },
  {
    image: "/assets/images/activity1.png",
    title: "Thú vui với động vật",
    description: "Thú vui với động vật",
  },
  {
    image: "/assets/images/activity1.png",
    title: "Thú vui với động vật",
    description: "Thú vui với động vật",
  },
];

const PopularActivities = () => {
  return (
    <div
      className="bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-50px] md:pb-20 py-28 pb-44 px-10 lg:px-0"
      style={{
        backgroundImage: `url(${BG3.src})`,
      }}
    >
      <div className="flex items-center">
        <Image
          src="/assets/images/section-icons/icon4.png"
          alt="ZooDoo logo"
          width={60}
          height={60}
        />
      </div>
      <div className="font-bold text-4xl lg:text-[48px] text-text-default py-6 uppercase">
        Hoạt động nổi bật
      </div>
      <div className="grid grid-cols-3 gap-4 w-full max-w-7xl pt-4 pb-16">
        {data.map((item, index) => (
          <ActivityCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularActivities;
