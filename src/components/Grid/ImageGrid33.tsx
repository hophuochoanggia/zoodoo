import Image from "next/image";

import AnimalsImage3 from "../../../public/assets/images/animals/animals3.png";
import AnimalsImage4 from "../../../public/assets/images/animals/animals4.png";
import AnimalsImage5 from "../../../public/assets/images/animals/animals5.png";

const ImageGrid33 = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full  px-10 lg:px-0">
      <div className="w-full aspect-square relative grid grid-rows-2 gap-2">
        <div className="grid grid-cols-2 gap-2 ">
          <div className="relative h-full">
            <Image
              src={AnimalsImage4.src}
              alt="Zoodoo animal image"
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
              alt="Zoodoo animal image"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="relative h-full">
          <Image
            src={AnimalsImage3.src}
            alt="Zoodoo animal image"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <div className="w-full aspect-square relative grid grid-rows-2 gap-2">
        <div className="relative h-full">
          <Image
            src={AnimalsImage3.src}
            alt="Zoodoo animal image"
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
              alt="Zoodoo animal image"
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
              alt="Zoodoo animal image"
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

export default ImageGrid33;
