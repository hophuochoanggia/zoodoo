"use client";
import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";

import RightChevron from "../../../../public/assets/icons/chevron-forward-outline.svg";

interface ICTAButtonProps {
  bgColor: "green" | "orange";
  text: string;
  onClick: () => void;
}

const CTAButton: FC<ICTAButtonProps> = ({
  bgColor = "green",
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-flex rounded-lg items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white hover:scale-105",
        bgColor === "green"
          ? "bg-green-light hover:bg-green-500"
          : "bg-orange-default hover:bg-orange-light"
      )}
    >
      <span className="text-white pr-2 uppercase">{text}</span>
      <Image priority src={RightChevron} alt="Follow us on Twitter" />
    </button>
  );
};

export default CTAButton;
