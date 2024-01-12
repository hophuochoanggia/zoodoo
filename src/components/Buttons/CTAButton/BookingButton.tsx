"use client";
import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";

import RightChevron from "../../../../public/assets/icons/chevron-forward-outline.svg";

// const ZOODOO_PHONE_NUMBER = "0979110007";

interface IBookingButtonProps {
  bgColor: "green" | "orange";
  text: string;
  className?: string;
  withIcon?: boolean;
  uppercase?: boolean;
}

const BookingButton: FC<IBookingButtonProps> = ({
  bgColor = "green",
  text,
  className,
  withIcon = true,
  uppercase = true,
}) => {
  return (
    <>
      <button
        data-cal-namespace="tham-quan-vuon-thu-zoodoo"
        data-cal-link="team/zoodoo/tham-quan-vuon-thu-zoodoo"
        data-cal-origin="https://booking.e9.digital"
        data-cal-config='{"layout":"month_view"}'
        className={clsx(
          "inline-flex rounded-lg items-center justify-center px-10 py-3 border border-transparent text-lg lg:text-xl fot-medium text-white hover:scale-105",
          bgColor === "green"
            ? "bg-green-light hover:bg-green-500"
            : "bg-orange-default hover:bg-orange-light",
          className
        )}
      >
        <span className={clsx("text-white pr-2", uppercase && "uppercase")}>
          {text}
        </span>
        {withIcon && <Image priority src={RightChevron} alt="next svg" />}
      </button>
    </>
  );
};

export default BookingButton;
