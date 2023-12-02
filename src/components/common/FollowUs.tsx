import React, { FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface IFollowUsProps {
  color?: string;
}

const FollowUs: FC<IFollowUsProps> = ({ color = "text-white" }) => {
  return (
    <div>
      <h2 className={clsx("mb-6 text-lg font-medium uppercase  pt-4", color)}>
        THEO DÕI CHÚNG TÔI
      </h2>
      <div className="flex flex-row space-x-6">
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
  );
};

export default FollowUs;
