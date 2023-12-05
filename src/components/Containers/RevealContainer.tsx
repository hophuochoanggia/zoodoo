import clsx from "clsx";
import React, { FC, Suspense } from "react";

import { motion, Variants } from "framer-motion";

interface IAnimalsIntroProps {
  background?: string;
  className?: string;
  children: React.ReactNode;
  animation?: boolean;
  animationProps?: any;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    scale: 0.7,
    opacity: 0.7,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
    scale: 1,
    opacity: 1,
  },
};

const RevealContainer: FC<IAnimalsIntroProps> = ({
  background,
  children,
  className,
  animation,
  animationProps,
}: IAnimalsIntroProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section
        className={clsx(
          "bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-30px] px-10 lg:px-0",
          className
        )}
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {!animation && (
          <div className="flex flex-col items-center justify-center lg:max-w-7xl space-y-20 pb-32 pt-20 max-w-4xl">
            {children}
          </div>
        )}
        {animation && (
          <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              variants={cardVariants}
              className="flex flex-col items-center justify-center lg:max-w-7xl space-y-20  pb-32 pt-20 max-w-4xl"
            >
              {children}
            </motion.div>
          </motion.section>
        )}
      </section>
    </Suspense>
  );
};

export default RevealContainer;
