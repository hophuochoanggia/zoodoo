import React from "react";

import Image from "next/image";

import ZooDooMap from "../../../public/assets/images/zoodoo-map.png";

const Footer = () => {
  return (
    <footer className="bg-green-default">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-6 pt-8">
          <div className="col-span-2 m-6">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/assets/images/logo-zoodoo-white-big.png"
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
              <h2 className="mb-6 text-lg font-medium uppercase text-white pt-4">
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
              <Image src={ZooDooMap} alt="map" width={500} height={500} />
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
