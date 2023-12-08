import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

interface ISectionTitleProps {
  icon?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const SectionTitle: FC<ISectionTitleProps> = ({
  icon,
  title,
  description,
  align = "center",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center space-y-4 lg:space-y-6 w-full",
        align === "center" ? "items-center" : "items-start"
      )}
    >
      {icon && (
        <div className="flex items-center">
          <Image src={icon} alt="ZooDoo logo" width={80} height={80} />
        </div>
      )}
      <div
        className={clsx(
          "font-bold text-3xl lg:text-4xl lg:text-[48px] text-text-default w-[380px] sm:w-[450px] md:w-[550px] lg:w-[730px] uppercase py-2 leading-snug",
          align === "center" ? "text-center" : " text-start"
        )}
      >
        {title}
      </div>
      {description && (
        <div
          className={clsx(
            "text-lg lg:text-xl text-black lg:w-[750px] leading-loose",
            align === "center" ? "text-center mx-8 lg:mx-24" : " text-start"
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
