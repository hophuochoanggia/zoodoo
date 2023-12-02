import clsx from "clsx";
import React, { FC, Suspense, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

interface IAnimalsIntroProps {
  background?: string;
  className?: string;
  children: React.ReactNode;
  animation?: boolean;
  animationProps?: any;
}

const MainContainer: FC<IAnimalsIntroProps> = ({
  background,
  children,
  className,
  animation,
  animationProps,
}: IAnimalsIntroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1.1 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
            <motion.div
              ref={sectionRef}
              style={{ scale: scaleProgress, opacity: opacityProgress }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              layout
              className="flex flex-col items-center justify-center lg:max-w-7xl space-y-20 py-28 max-w-4xl"
            >
              {children}
            </motion.div>
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

export default MainContainer;
