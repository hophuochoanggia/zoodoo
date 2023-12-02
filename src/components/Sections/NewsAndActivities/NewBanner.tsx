import React from "react";
import Image from "next/image";

import BackButton from "@/components/Buttons/BackButton";

interface INewBannerProps {
  title: string;
  date: string;
}

const NewBanner = () => {
  return (
    <div className="py-16 pt-44">
      <div className="grid grid-cols-5">
        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <BackButton />
            <div className="text-5xl text-white font-bold leading-[72px]">
              Tất tần tật về vườn thú &quot;siêu cấp&quot; đáng yêu Zoodoo Đà
              Lạt
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-white text-base font-medium">12/12/2021</div>
            <div className="flex flex-row space-x-6">
              <div className="flex items-end text-white font-normal text-base">
                Share
              </div>
              <Image
                src="/assets/socials/facebook.png"
                width={40}
                height={40}
                alt="facebook"
              />
              <Image
                src="/assets/socials/insta.png"
                width={40}
                height={40}
                alt="instagram"
              />
              <Image
                src="/assets/socials/tiktok.png"
                width={40}
                height={40}
                alt="tiktok"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 ml-16">
          <Image
            src={"/assets/images/news/new1.png"}
            alt="Banner"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
