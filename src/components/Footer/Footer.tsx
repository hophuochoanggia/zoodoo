import React from "react";

import Image from "next/image";

import FollowUs from "@/components/common/FollowUs";
import ZoodooMap from "@/components/Map/ZoodooMap";

const Footer = () => {
  return (
    <footer className="bg-green-default">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-6 pt-8">
          <div className="col-span-2 m-6">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/assets/images/logos/logo-zoodoo-white-big.png"
                alt="Company Logo"
                width={160}
                height={160}
              />
            </a>
          </div>
          <div className="col-span-4 grid grid-cols-4 gap-6 m-6">
            <div className="col-span-1">
              <h2 className="mb-6 text-lg font-medium uppercase text-white">
                VỀ ZOODOO
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Về chúng tôi
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tin tức & hoạt động
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Trãi nghiệm ZooDoo
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Ghé thăm ZooDoo
                  </a>
                </li>
              </ul>
              <FollowUs />
            </div>
            <div className="col-span-1">
              <h2 className="mb-6 text-lg font-medium uppercase text-white">
                Liên hệ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <p className="">090 7110 007 </p>
                </li>
                <li className="mb-4">
                  <a href="mailto:hello@zoodoodalat.com">
                    hello@zoodoodalat.com
                  </a>
                </li>
                <li>
                  <p>4H6P+VG6, ĐT723, Xã Đạ Nhim, Lạc Dương, Lâm Đồng </p>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <ZoodooMap width="400" height="400" />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
        <div className="flex items-end justify-end ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Zoodoo . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
