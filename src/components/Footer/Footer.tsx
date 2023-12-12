import Image from "next/image";
import Link from "next/link";

import FollowUs from "@/components/common/FollowUs";
import ZoodooMap from "@/components/Map/ZoodooMap";

const Footer = () => {
  return (
    <footer className="bg-green-default hidden lg:block">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="grid grid-cols-8 pt-8">
          <div className="col-span-2 m-6">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/assets/images/logos/logo-zoodoo-white-big.png"
                alt="ZooDoo logo"
                width={160}
                height={160}
              />
            </a>
          </div>
          <div className="col-span-6 grid grid-cols-4 gap-6 my-6">
            <div className="col-span-2 flex flex-col ">
              <div className="w-full grid grid-cols-2 ">
                <div className="col-span-1">
                  <h2 className="mb-6 text-xl lg:text-[25px] font-medium uppercase text-white">
                    VỀ ZOODOO
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <Link
                        href="/ve-zoodoo"
                        className="text-[#F0FDF4] text-base lg:text-lg "
                      >
                        Về chúng tôi
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/tin-tuc-va-hoat-dong"
                        className="text-[#F0FDF4] text-base lg:text-lg"
                      >
                        Tin tức & hoạt động
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/tin-tuc-va-hoat-dong"
                        className="text-[#F0FDF4] text-base lg:text-lg"
                      >
                        Trải nghiệm ZooDoo
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="/ghe-tham-zoodoo"
                        className="text-[#F0FDF4] text-base lg:text-lg"
                      >
                        Ghé thăm ZooDoo
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-1">
                  <h2 className="mb-6 text-xl lg:text-[25px] font-medium uppercase text-white">
                    Liên hệ
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a
                        className="text-[#F0FDF4] text-base lg:text-lg"
                        href="tel:0979110007"
                      >
                        0979 11 00 07
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        href="mailto:hello@zoodoodalat.com"
                        className="text-[#F0FDF4] text-base lg:text-lg"
                      >
                        hello@zoodoodalat.com
                      </a>
                    </li>
                    <li>
                      <a
                        className=" focus:text-white text-[#F0FDF4] text-base lg:text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://maps.app.goo.gl/eSTLDVf8wjaMukXMA"
                      >
                        Quốc lộ 27C, tiểu khu 94A, Đạ Nhim, Lạc Dương, Lâm Đồng{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <FollowUs />
            </div>

            <div className="col-span-2">
              <ZoodooMap width="460" height="460" />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
        <div className="flex flex-row justify-between ">
          <a
            href="https://e9.digital/"
            className="text-lg text-[#F3EEDF] sm:text-center"
          >
            Proudly built by E9
          </a>
          <span className="text-lg text-[#F3EEDF] sm:text-center">
            Copyright ZooDoo - Zoo&Coffee, All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
