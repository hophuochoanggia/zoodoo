"use client";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CTAButton from "@/components/Buttons/CTAButton/CTAButton";

const Header = () => {
  const [colorChange, setColorchange] = useState<boolean>(false);

  const router = usePathname();
  const isHomeScreen = router === "/";
  const shouldShowTransparent = isHomeScreen && !colorChange;

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 800) {
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
        "fixed top-0 left-0 right-0 flex items-center justify-center p-4  text-white w-full z-50",
        shouldShowTransparent ? "bg-transparent" : "bg-white"
      )}
    >
      <div className="flex flex-wrap justify-between items-center max-w-7xl w-full">
        <div className="flex items-center">
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
        </div>
        <nav>
          <ul className="flex space-x-4 flex-row justify-between items-center">
            <li>
              <Link
                href="#home"
                className={clsx(
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={clsx(
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Ghé Thăm ZooDoo
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={clsx(
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Trải nghiệm ở ZooDoo
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
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
    </header>
  );
};

export default Header;
