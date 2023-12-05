import clsx from "clsx";
import React, { FC, Suspense, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

interface IAnimalsIntroProps {
  background?: string;
  className?: string;
  children: React.ReactNode;
}

const MainContainer: FC<IAnimalsIntroProps> = ({
  background,
  children,
  className,
}: IAnimalsIntroProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {background && (
        <section
          className={clsx(
            "bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-30px] px-10 lg:px-0",
            className
          )}
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="flex flex-col items-center justify-center lg:max-w-7xl space-y-20  pb-32 pt-20 max-w-4xl">
            {children}
          </div>
        </section>
      )}
      {!background && (
        <section
          className={clsx(
            "flex flex-col items-center justify-center pb-32 pt-20 bg-white px-10 lg:px-0",
            className
          )}
        >
          <div className="max-w-7xl">{children}</div>
        </section>
      )}
    </Suspense>
  );
};

export default MainContainer;
