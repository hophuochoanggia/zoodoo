import React, { FC } from "react";

interface IZooDooMapProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const ZooDooMap: FC<IZooDooMapProps> = ({
  width = "600",
  height = "450",
  borderRadius = "0px",
}) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5225529968184!2d108.5833530004277!3d12.112020827080658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317108f65aa14ad9%3A0x7d971942e209c206!2sZooDoo%20Zoo!5e0!3m2!1sen!2s!4v1701332174911!5m2!1sen!2s"
      width={width}
      height={height}
      style={{ border: 0, borderRadius: borderRadius }}
      loading="lazy"
    ></iframe>
  );
};

export default ZooDooMap;
