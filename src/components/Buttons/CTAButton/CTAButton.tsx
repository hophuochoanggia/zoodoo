"use client";
import clsx from "clsx";
import React, { FC } from "react";
import Image from "next/image";

import RightChevron from "../../../../public/assets/icons/chevron-forward-outline.svg";

interface ICTAButtonProps {
  bgColor: "green" | "orange";
  text: string;
  onClick?: () => void;
  className?: string;
  withIcon?: boolean;
  uppercase?: boolean;
}

const CTAButton: FC<ICTAButtonProps> = ({
  bgColor = "green",
  text,
  onClick,
  className,
  withIcon = true,
  uppercase = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-flex rounded-lg items-center justify-center px-10 py-3 border border-transparent text-lg lg:text-xl fot-medium text-white hover:scale-105 text-overflow",
        bgColor === "green"
          ? "bg-green-light hover:bg-green-500"
          : "bg-orange-default hover:bg-orange-light",
        className
      )}
    >
      <span className={clsx("text-white pr-2 text-overflow", uppercase && "uppercase")}>
        {text}
      </span>
      {withIcon && <Image priority src={RightChevron} alt="next svg" />}
    </button>
  );
};

export default CTAButton;
