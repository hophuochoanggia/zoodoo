"use client";
import React from "react";
import Image from "next/image";
import { FacebookShareButton, InstapaperShareButton } from "next-share";

import BackButton from "@/components/Buttons/BackButton";

const NewFooter = () => {
  return (
    <div className="flex flex-col pt-10 w-full">
      <div className="flex w-full flex-row items-end justify-end ">
        <div className="flex flex-row space-x-6">
          <div className="flex items-end text-black font-normal text-base">
            Share
          </div>
          <FacebookShareButton
            url={"https://www.facebook.com/zoodoo.dalat"}
            quote={
              "next-share is a social share buttons for your next React apps."
            }
            hashtag={"#zoodoo"}
          >
            <Image
              src="/assets/socials/facebook.png"
              width={40}
              height={40}
              alt="facebook"
            />
          </FacebookShareButton>
        </div>
      </div>
      <BackButton color="#000000" />
    </div>
  );
};
export default NewFooter;
