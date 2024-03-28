"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import BookingButton from "../Buttons/CTAButton/BookingButton";
import { NavMobile } from "./NavMobile";
import Booking from "../Buttons/CTAButton/Booking";

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
                src="/assets/images/logos/logo-zoodoo-white.png"
                alt="ZooDoo logo"
                width={100}
                height={100}
              />
            ) : (
              <Image
                src="/assets/images/logos/logo-zoodoo-green.png"
                alt="ZooDoo logo"
                width={100}
                height={100}
              />
            )}
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 flex-row justify-between items-center">
            <li>
              <Link
                href="/ve-zoodoo"
                className={clsx(
                  "text-lg",
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link
                href="/ghe-tham-zoodoo"
                className={clsx(
                  "text-lg",
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Ghé Thăm ZooDoo
              </Link>
            </li>
            <li>
              <Link
                href="/trai-nghiem-zoodoo"
                className={clsx(
                  "text-lg",
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Trải nghiệm ở ZooDoo
              </Link>
            </li>
            <li>
              <Link
                href="/tin-tuc-va-hoat-dong"
                className={clsx(
                  "text-lg",
                  shouldShowTransparent ? "text-white" : "text-green-default"
                )}
              >
                Tin tức hoạt động
              </Link>
            </li>
            <li className="pl-6">
              <Booking text="ĐẶT VÉ NGAY" />
            </li>
          </ul>
        </nav>
      </div>
      <NavMobile />
    </header>
  );
};

export default Header;
