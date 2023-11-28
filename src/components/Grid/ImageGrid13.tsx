import React from "react";
import Image from "next/image";

import AnimalsImage2 from "../../../public/assets/images/animals2.png";
import AnimalsImage3 from "../../../public/assets/images/animals3.png";
import AnimalsImage4 from "../../../public/assets/images/animals4.png";
import AnimalsImage5 from "../../../public/assets/images/animals5.png";

const ImageGrid13 = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      <div className="w-full aspect-square relative">
        <Image
          src={AnimalsImage2.src}
          alt="Company Logo"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="w-full aspect-square relative grid grid-rows-2 gap-2">
        <div className="relative h-full">
          <Image
            src={AnimalsImage3.src}
            alt="Company Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="relative h-full">
            <Image
              src={AnimalsImage4.src}
              alt="Company Logo"
              fill
              style={{
                objectFit: "contain",
              }}
              // sizes="(max-width: 640px) 100vw, 640px"
            />
          </div>
          <div className="relative h-full">
            <Image
              src={AnimalsImage5.src}
              alt="Company Logo"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid13;
