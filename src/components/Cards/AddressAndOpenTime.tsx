import React from "react";
import Image from "next/image";
import AddressSvg from "../../../public/assets/icons/address.svg";
import OpenHourseSvg from "../../../public/assets/icons/open-hours.svg";

const data = [
  {
    title: "Địa chỉ",
    content: "Đường 32, Thảo Điền, Quận 2, TP. Hồ Chí Minh",
  },
  {
    title: "Giờ mở cửa",
    content: "9:00 - 17:00",
  },
];

const AddressAndOpenTime = () => {
  return (
    <div className="flex flex-row items-center justify-center divide-x-2 divide-gray-default">
      <div className="flex flex-row items-center pr-12">
        <Image
          priority
          src={AddressSvg}
          alt="Zoodoo address"
          className="pl-4"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-700">Địa chỉ</h3>
          <p className="text-base text-gray-500">ĐT723, Xã Đạ Nhim,</p>
          <p className="text-base text-gray-500">Lạc Dương, Lâm Đồng</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <Image
          priority
          src={OpenHourseSvg}
          alt="Zoodoo address"
          className="pl-4"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-700">Giờ hoạt động</h3>
          <p className="text-base text-gray-500">Mở cửa các ngày trong tuần</p>
          <p className="text-base text-gray-500">9 giờ sáng - 6 giờ chiều</p>
        </div>
      </div>
    </div>
  );
};

export default AddressAndOpenTime;
