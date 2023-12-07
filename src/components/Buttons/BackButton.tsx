"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface IBackButtonProps {
  color?: string;
}

const BackButton: FC<IBackButtonProps> = ({ color = "#FFFFFF" }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <button
      className="flex flex-row items-center justify-start my-2 hover:opacity-80 cursor-pointer"
      onClick={() => goBack()}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.7955 17.2046C16.2349 17.6439 16.2349 18.3561 15.7955 18.7955C15.3562 19.2348 14.6439 19.2348 14.2045 18.7955L8.20457 12.7955C7.76897 12.36 7.76462 11.6552 8.19482 11.2144L14.0487 5.21437C14.4826 4.76965 15.1949 4.76087 15.6396 5.19478C16.0843 5.62867 16.0931 6.34092 15.6592 6.78565L10.5813 11.9903L15.7955 17.2046Z"
          fill={color}
        />
      </svg>
      <div className={clsx("pl-2 text-base ")} style={{ color: color }}>
        Quay lại
      </div>
    </button>
  );
};

export default BackButton;
