import React, { FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface IFollowUsProps {
  title?: string;
  color?: string;
}

const FollowUs: FC<IFollowUsProps> = ({
  color = "text-white",
  title = "THEO DÕI CHÚNG TÔI",
}) => {
  return (
    <div>
      <h2
        className={clsx(
          "mb-6 text-xl lg:text-[25px]  font-medium uppercase  pt-4",
          color
        )}
      >
        {title}
      </h2>
      <div className="flex flex-row space-x-6 items-center justify-center md:justify-start">
        <a
          href="https://www.facebook.com/zoodoo.dalat?locale=vi_VN"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/assets/socials/facebook.png"
            width={40}
            height={40}
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/zoodoodalat"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/assets/socials/insta.png"
            width={40}
            height={40}
            alt="instagram"
          />
        </a>
        <a
          href="https://www.tiktok.com/@zoodoodalat"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/assets/socials/tiktok.png"
            width={40}
            height={40}
            alt="tiktok"
          />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
