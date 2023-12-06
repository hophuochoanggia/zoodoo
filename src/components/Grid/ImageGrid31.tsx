import { FC } from "react";
import Image from "next/image";

interface ImageGrid13Props {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

const ImageGrid31: FC<ImageGrid13Props> = ({
  image1,
  image2,
  image3,
  image4,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full px-10 lg:px-0">
      <div className="w-full aspect-square relative grid grid-rows-2 gap-2">
        <div className="relative h-full">
          <Image
            src={image1}
            alt="ZooDoo animals image"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <div className="relative h-full">
            <Image
              src={image2}
              alt="ZooDoo animals image"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="relative h-full">
            <Image
              src={image3}
              alt="ZooDoo animals image"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full aspect-square relative">
        <Image
          src={image4}
          alt="ZooDoo animal image"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default ImageGrid31;
