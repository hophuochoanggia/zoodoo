import Image from "next/image";
import Link from "next/link";

import FollowUs from "@/components/common/FollowUs";

const FooterMobile = () => {
  return (
    <footer className="bg-green-default block lg:hidden">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col pt-8">
          <div className="m-6 w-full flex items-center justify-center">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/assets/images/logos/logo-zoodoo-white-big.png"
                alt="Zoodoo logo"
                width={160}
                height={160}
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 m-6">
            <div className="col-span-1 flex flex-col items-center justify-center">
              <h2 className="mb-6 text-xl font-medium uppercase text-white">
                VỀ ZOODOO
              </h2>
              <ul className="text-white font-medium flex flex-col justify-center items-center">
                <li className="mb-4">
                  <Link href="/ve-zoodoo" className="text-gray-light">
                    Về chúng tôi
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/tin-tuc-va-hoat-dong"
                    className="text-gray-light"
                  >
                    Tin tức & hoạt động
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/tin-tuc-va-hoat-dong"
                    className="text-gray-light"
                  >
                    Trãi nghiệm ZooDoo
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/den-tham-zoodoo" className="text-gray-light">
                    Ghé thăm ZooDoo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 flex flex-col items-center justify-start">
              <h2 className="mb-6 text-xl font-medium uppercase text-white">
                Liên hệ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col justify-center items-center">
                <li className="mb-4">
                  <p className="text-gray-light">090 7110 007 </p>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:hello@zoodoodalat.com"
                    className="text-gray-light"
                  >
                    hello@zoodoodalat.com
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://maps.app.goo.gl/eSTLDVf8wjaMukXMA"
                  >
                    <p className=" focus:text-white text-center text-gray-light ">
                      4H6P+VG6, ĐT723, Xã Đạ Nhim, Lạc Dương, Lâm Đồng{" "}
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <FollowUs />
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

export default FooterMobile;
