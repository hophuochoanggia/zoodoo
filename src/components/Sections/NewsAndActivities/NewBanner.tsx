import { FC } from "react";
import Image from "next/image";

import BackButton from "@/components/Buttons/BackButton";
import { INewsItem } from "@/types/contentful";

interface INewBannerProps {
  content: INewsItem;
}

const NewBanner: FC<INewBannerProps> = () => {
  return (
    <div className="pt-32 lg:pt-44">
      <div className="flex flex-col lg:grid lg:grid-cols-5">
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="pb-8">
              <BackButton />
            </div>
            <div className="text-3xl lg:text-5xl text-white font-bold leading-[72px]">
              Tất tần tật về vườn thú &quot;siêu cấp&quot; đáng yêu ZooDoo Đà
              Lạt
            </div>
            <div className="block lg:hidden py-4 text-white text-base text-end font-medium">
              12/12/2021
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-col space-y-4">
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
        <div className="flex flex-row justify-center items-center lg:col-span-3 lg:ml-16">
          <Image
            src={"/assets/images/news/new1.png"}
            alt="Banner"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col lg:hidden py-8">
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
    </div>
  );
};

export default NewBanner;
