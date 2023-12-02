import clsx from "clsx";
import React, { FC, Suspense, use, useEffect, useRef } from "react";

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

interface IAnimalsIntroProps {
  background?: string;
  className?: string;
  children: React.ReactNode;
  animation?: boolean;
  animationProps?: any;
}

const RevealContainer: FC<IAnimalsIntroProps> = ({
  background,
  children,
  className,
  animation,
  animationProps,
}: IAnimalsIntroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true });

  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

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
          {!animation && (
            <div className="flex flex-col items-center justify-center lg:max-w-7xl space-y-20 py-28 max-w-4xl">
              {children}
            </div>
          )}
          {animation && (
            <motion.section ref={sectionRef}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.25 }}
                initial="hidden"
                animate={mainControl}
                className="flex flex-col items-center justify-center lg:max-w-7xl space-y-20 py-28 max-w-4xl"
              >
                {children}
              </motion.div>
            </motion.section>
          )}
        </section>
      )}
      {!background && (
        <section
          className={clsx(
            "flex flex-col items-center justify-center py-28 bg-white px-10 lg:px-0",
            className
          )}
          ref={sectionRef}
        >
          <div className="max-w-7xl">{children}</div>
        </section>
      )}
    </Suspense>
  );
};

export default RevealContainer;
