import React from "react";
import Image from "next/image";

import HiringCard from "@/components/Cards/HiringCard";
import BackButton from "@/components/Buttons/BackButton";
import MainContainer from "@/components/Containers/MainContainer";
import EmployerInfo from "@/components/Sections/Hiring/EmployerInfo";

const HiringDetails = () => {
  return (
    <div className="flex flex-col py-8">
      <h1 className="font-bold text-2xl lg:text-4xl">
        Tuyển nhân viên Zookeeper
      </h1>
      <div className="flex flex-col space-y-4 py-4">
        <div className="flex flex-row space-x-2">
          <Image
            src={"/assets/icons/hiring/MapPinLine.svg"}
            alt="Article"
            layout="fixed"
            width={24}
            height={24}
          />
          <div className="flex flex-wrap text-md lg:text-lg space-x-2">
            <p>Địa điểm: </p>
            <p className="font-bold">
              4H6P+VG6, ĐT723, Xã Đạ Nhim, Lạc Dương, Lâm Đồng
            </p>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <Image
            src={"/assets/icons/hiring/Database.svg"}
            alt="salary"
            layout="fixed"
            width={24}
            height={24}
          />
          <div className="flex flex-wrap text-md lg:text-lg space-x-2">
            <p>Mức lương: </p>
            <p className="font-bold">20-15 triệu </p>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <Image
            src={"/assets/icons/hiring/MapPinLine.svg"}
            alt="Article"
            layout="fixed"
            width={24}
            height={24}
          />
          <div className="flex flex-wrap text-md lg:text-lg space-x-2">
            <p>Hình thức: </p>
            <p className="font-bold">Toàn thời gian/ Thời vụ </p>
          </div>
        </div>
        <div className="flex flex-row space-x-2">
          <Image
            src={"/assets/icons/hiring/MapPinLine.svg"}
            alt="Article"
            layout="fixed"
            width={24}
            height={424}
          />
          <div className="flex flex-wrap text-md lg:text-lg space-x-2">
            <p>Hạn nộp hồ sơ:: </p>
            <p className="font-bold">30/11/2023 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Requirement = () => {
  return (
    <div className=" flex-col justify-start items-start gap-8 inline-flex">
      <div className=" flex-col justify-start items-start gap-4 flex">
        <div className="  text-2xl font-bold ] leading-9">Mô tả công việc</div>
        <div className=" text-gray-600 text-lg lg:text-xl font-medium ] leading-loose">
          <ul>
            <li>
              <p className="pl-2">
                Tham quan vườn thú sẽ được thực hiện bằng cách đi bộ và có sự
                hướng dẫn từ zookeeper.
              </p>
            </li>
            <li>
              <p className="pl-2">
                Thời gian trung bình mỗi chuyến tham quan là từ 90 đến 105 phút.
                Quý khách theo dõi hướng dẫn của zookeeper và tuân thủ nội quy
                và các quy tắc an toàn được thông báo.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex-col justify-start items-start gap-4 flex">
        <div className=" text-2xl font-bold  leading-9">Yêu cầu công việc</div>
        <div className="">
          <p className="font-bold text-lg lg:text-xl ">1. Chuyên môn</p>
          <ul className="list text-gray-600 pl-2 text-lg lg:text-xl flex flex-col space-y-1">
            <li>
              <p className="pl-2">
                Tham quan vườn thú sẽ được thực hiện bằng cách đi bộ và có sự
                hướng dẫn từ zookeeper.
              </p>
            </li>
            <li>
              <p className="pl-2">
                Thời gian trung bình mỗi chuyến tham quan là từ 90 đến 105 phút.
                Quý khách theo dõi hướng dẫn của zookeeper và tuân thủ nội quy
                và các quy tắc an toàn được thông báo.
              </p>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="font-bold text-lg lg:text-xl ">1. Chuyên môn</p>
          <ul className="list text-gray-600 pl-2 text-lg lg:text-xl flex flex-col space-y-1">
            <li>
              <p className="pl-2">
                Tham quan vườn thú sẽ được thực hiện bằng cách đi bộ và có sự
                hướng dẫn từ zookeeper.
              </p>
            </li>
            <li>
              <p className="pl-2">
                Thời gian trung bình mỗi chuyến tham quan là từ 90 đến 105 phút.
                Quý khách theo dõi hướng dẫn của zookeeper và tuân thủ nội quy
                và các quy tắc an toàn được thông báo.
              </p>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="font-bold text-lg lg:text-xl ">1. Chuyên môn</p>
          <ul className="list text-gray-600 pl-2 text-lg lg:text-xl flex flex-col space-y-1">
            <li>
              <p className="pl-2">
                Tham quan vườn thú sẽ được thực hiện bằng cách đi bộ và có sự
                hướng dẫn từ zookeeper.
              </p>
            </li>
            <li>
              <p className="pl-2">
                Thời gian trung bình mỗi chuyến tham quan là từ 90 đến 105 phút.
                Quý khách theo dõi hướng dẫn của zookeeper và tuân thủ nội quy
                và các quy tắc an toàn được thông báo.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex-col justify-start items-start gap-4 flex text-lg lg:text-xl">
        <div className="  font-bold text-2xl  leading-9">Quyền lợi</div>
        <div className=" text-gray-600 font-medium leading-loose">
          <ul className="list">
            <li>
              <p className="pl-2">
                Tham quan vườn thú sẽ được thực hiện bằng cách đi bộ và có sự
                hướng dẫn từ zookeeper.
              </p>
            </li>
            <li>
              <p className="pl-2">
                Thời gian trung bình mỗi chuyến tham quan là từ 90 đến 105 phút.
                Quý khách theo dõi hướng dẫn của zookeeper và tuân thủ nội quy
                và các quy tắc an toàn được thông báo.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const HiringDetailPage = () => {
  return (
    <div>
      <MainContainer>
        <div className="flex flex-col lg:grid lg:grid-cols-3 pt-20 min-h-screen text-[#111827]">
          <div className="col-span-2 lg:mr-8 flex flex-col">
            <div className="w-full">
              <Image
                className="w-full"
                src={"/assets/images/animals/hiring.png"}
                alt="Article"
                layout="responsive"
                width={1920}
                height={1080}
              />
            </div>
            <HiringDetails />
            <div className="border" />
            <Requirement />
            <div className="py-10">
              <BackButton color="#000" />
            </div>
          </div>
          <div className="col-span-1">
            <EmployerInfo />
          </div>
        </div>
      </MainContainer>

      <MainContainer>
        <div className="flex flex-col -mt-[100px] w-full">
          <div className="flex flex-row items-center justify-start py-10">
            <div className="flex items-center">
              <Image
                src={"/assets/images/section-icons/icon6.png"}
                alt="ZooDoo logo"
                width={50}
                height={50}
              />
            </div>
            <p className="font-bold text-4xl text-text-default lg:w-[600px] text-start pl-4">
              Các vị trí khác
            </p>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 py-16 mx-6 lg:mx-0">
            <HiringCard />
            <HiringCard />
            <HiringCard />
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default HiringDetailPage;
