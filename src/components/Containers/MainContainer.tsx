import clsx from "clsx";
import React, { FC, Suspense } from "react";

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
        <div
          className={clsx(
            "bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-50px]",
            className
          )}
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="flex flex-col items-center justify-center max-w-7xl space-y-20 py-28">
            {children}
          </div>
        </div>
      )}
      {!background && (
        <div
          className={clsx(
            "flex flex-col items-center justify-center py-28 bg-white ",
            className
          )}
        >
          <div className="max-w-7xl">{children}</div>
        </div>
      )}
    </Suspense>
  );
};

export default MainContainer;
