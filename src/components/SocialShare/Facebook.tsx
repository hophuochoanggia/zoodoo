"use client";
import React from "react";
import Image from "next/image";
import { FacebookShareButton } from "next-share";

const FacebookButton = ({ url }: { url: string }) => {
  return (
    <FacebookShareButton url={url} hashtag={"#zoodoo"}>
      <Image
        src="/assets/socials/facebook.png"
        width={40}
        height={40}
        alt="facebook"
      />
    </FacebookShareButton>
  );
};

export default FacebookButton;
