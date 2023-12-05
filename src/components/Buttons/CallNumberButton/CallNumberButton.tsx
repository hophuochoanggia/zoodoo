"use client";
import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";

import RightChevron from "../../../../public/assets/icons/chevron-forward-outline.svg";

interface ICTAButtonProps {
  bgColor: "green" | "orange";
  text: string;
  className?: string;
  withIcon?: boolean;
}

const CallNumberButton: FC<ICTAButtonProps> = ({
  bgColor = "green",
  text,
  className,
  withIcon = true,
}) => {
  return (
    <a
      className={clsx(
        "inline-flex rounded-lg items-center justify-center  border border-transparent text-[20px] font-medium text-white hover:scale-105",
        bgColor === "green"
          ? "bg-green-light hover:bg-green-500"
          : "bg-orange-default hover:bg-orange-light",
        className ? className : "px-10 py-3"
      )}
      href="tel:0979110007"
    >
      <span className="text-white pr-2 uppercase">{text}</span>
      {withIcon && (
        <Image priority src={RightChevron} alt="Follow us on Twitter" />
      )}
    </a>
  );
};

export default CallNumberButton;
