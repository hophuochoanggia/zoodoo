"use client";
import Image from "next/legacy/image";

import CTAButtonTransperent from "@/components/Buttons/CTAButton/CTAButtonTransperent";

import NewsImage1 from "@/../public/assets/images/news/new1.png";

const NewCard = () => {
  // gid 5 col, 2 and 3 col
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5">
      <div className="lg:col-span-2 flex flex-col">
        <div className=" text-text-title text-2xl lg:text-4xl">
          HOẠT ĐỘNG NỔI BẬT
        </div>
        <div className="text-3xl lg:text-5xl text-text-title font-bold leading-normal lg:leading-[72px]">
          Vườn thú ZooDoo Đà Lạt: Review đường đi, giá vé, chơi gì, ăn gì?
        </div>
        <div className="font-medium text-lg text-text-gray leading-7 py-3">
          ZooDoo Đà Lạt như một “làn gió mới” cho du lịch Đà Lạt vì là một nơi
          có thể vừa “thăm thú”, vừa chụp hình check-in, nhâm nhi cafe và tham
          gia nhiều hoạt động trải nghiệm khác.
        </div>
        <div className="flex items-start">
          <CTAButtonTransperent text="Xem thêm" onClick={() => {}} />
        </div>
      </div>
      <div className="lg:col-span-3 lg:pl-16 lg:ml-16 ">
        <Image
          src={NewsImage1.src}
          alt="Banner"
          layout="responsive"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

const NewsSwiper = () => {
  return (
    <div className="py-16 pt-44">
      <NewCard />
    </div>
  );
};

export default NewsSwiper;
