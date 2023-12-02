"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CTAButton from "@/components/Buttons/CTAButton/CTAButton";
import { NavMobile } from "./NavMobile";

const Header = () => {
  const [colorChange, setColorchange] = useState<boolean>(false);

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
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 flex items-center justify-center p-4  text-white w-full z-50 ",
        shouldShowTransparent ? "bg-transparent" : "bg-white shadow-md"
      )}
    >
      <div className="lg:flex flex-wrap justify-between items-center max-w-7xl w-full hidden">
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
        <nav>
          <ul className="flex space-x-4 flex-row justify-between items-center">
            <li>
              <Link
                href="/about-us"
                className={clsx(
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link
                href="/visit-us"
                className={clsx(
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Ghé Thăm ZooDoo
              </Link>
            </li>
            <li>
              <Link
                href="/experiences"
                className={clsx(
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Trải nghiệm ở ZooDoo
              </Link>
            </li>
            <li>
              <Link
                href="/news-and-activities"
                className={clsx(
                  shouldShowTransparent ? "text-white" : "text-green-default"
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
      <NavMobile />
    </header>
  );
};

export default Header;
