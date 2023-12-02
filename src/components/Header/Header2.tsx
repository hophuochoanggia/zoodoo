"use client";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import CTAButton from "../Buttons/CTAButton/CTAButton";
import { useToggle } from "@/hooks/useToggle";
import useClickAway from "@/hooks/useClickAway";

const Header2 = () => {
  const [colorChange, setColorchange] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  const router = usePathname();
  const isHomeScreen = router === "/";
  const shouldShowTransparent = isHomeScreen && !colorChange;

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY > 0) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <header className="relative max-w-screen">
      {false && (
        <div
          className={clsx(
            "fixed top-0 left-0 right-0 flex items-center justify-center p-4  text-white w-full z-50 ",
            shouldShowTransparent ? "bg-transparent" : "bg-white shadow-md"
          )}
        >
          <div className="flex flex-wrap justify-between items-center max-w-7xl w-full md:p-0 px-4">
            <div className="flex items-center">
              <Link href="/">
                {shouldShowTransparent ? (
                  <Image
                    src="/assets/images/logo-zoodoo-white.png"
                    alt="Company Logo"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/assets/images/logo-zoodoo-green.png"
                    alt="Company Logo"
                    width={100}
                    height={100}
                  />
                )}
              </Link>
            </div>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <nav>
                <ul className="flex space-x-4 flex-row justify-between items-center">
                  <li>
                    <Link
                      href="/about-us"
                      className={clsx(
                        shouldShowTransparent
                          ? "text-white"
                          : "text-green-default"
                      )}
                    >
                      Về chúng tôi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/visit-us"
                      className={clsx(
                        shouldShowTransparent
                          ? "text-white"
                          : "text-green-default"
                      )}
                    >
                      Ghé Thăm ZooDoo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/experiences"
                      className={clsx(
                        shouldShowTransparent
                          ? "text-white"
                          : "text-green-default"
                      )}
                    >
                      Trải nghiệm ở ZooDoo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news-and-activities"
                      className={clsx(
                        shouldShowTransparent
                          ? "text-white"
                          : "text-green-default"
                      )}
                    >
                      Tin tức hoạt động
                    </Link>
                  </li>
                  <li>
                    <CTAButton
                      text="ĐẶT VÉ NGAY"
                      bgColor="green"
                      onClick={() => {}}
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}

    </header>
  );
};

export default Header2;
