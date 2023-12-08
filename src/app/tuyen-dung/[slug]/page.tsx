import React from "react";

const EmployeeInfo = () => {
  return (
    <div className="w-96 h-96 flex-col justify-start items-start gap-14 inline-flex">
      <div className="h-72 px-6 py-8 bg-green-900 rounded-lg border border-gray-300 flex-col justify-start items-start gap-6 flex">
        <div className="text-white text-3xl font-bold font-['Asap'] leading-10">
          Gửi hồ sơ ứng tuyển
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
          <div className="w-72 text-white text-lg font-medium font-['Asap'] leading-relaxed">
            Gửi hồ sơ ứng tuyển qua email
          </div>
          <div className="w-80 text-white text-lg font-bold font-['Asap'] leading-relaxed">
            demo@gmail.com
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
          <div className="w-72 text-white text-lg font-medium font-['Asap'] leading-relaxed">
            Hoặc liên hệ qua số điện thoại
          </div>
          <div className="w-80 text-white text-lg font-bold font-['Asap'] leading-relaxed">
            0123456789
          </div>
        </div>
      </div>
      <div className="h-96 px-6 py-8 bg-gray-50 rounded-lg border border-gray-300 flex-col justify-start items-start gap-6 flex">
        <div className="text-black text-3xl font-bold font-['Asap'] leading-10">
          Nộp hồ sơ trực tuyến
        </div>
        <div className="self-stretch h-20 relative">
          <div className="w-80 h-12 left-0 top-[34px] absolute bg-gray-100 rounded" />
          <div className="w-24 left-0 top-0 absolute text-gray-800 text-base font-bold font-['Asap'] leading-normal">
            Họ và tên*
          </div>
          <div className="w-48 left-[16px] top-[46px] absolute text-gray-500 text-base font-normal font-['Asap'] leading-normal">
            Nhập họ tên
          </div>
        </div>
        <div className="self-stretch h-20 relative">
          <div className="w-80 h-12 left-0 top-[34px] absolute bg-gray-100 rounded" />
          <div className="w-32 left-0 top-0 absolute text-gray-800 text-base font-bold font-['Asap'] leading-normal">
            Số điện thoại*
          </div>
          <div className="w-40 left-[16px] top-[46px] absolute text-gray-500 text-base font-normal font-['Asap'] leading-normal">
            Nhập số điện thoại
          </div>
        </div>
        <div className="self-stretch h-20 relative">
          <div className="w-80 h-12 left-0 top-[34px] absolute bg-gray-100 rounded" />
          <div className="w-14 left-0 top-0 absolute text-gray-800 text-base font-bold font-['Asap'] leading-normal">
            Email*
          </div>
          <div className="w-28 left-[16px] top-[46px] absolute text-gray-500 text-base font-normal font-['Asap'] leading-normal">
            Nhập email
          </div>
        </div>
        <div className="self-stretch h-20 relative">
          <div className="w-80 h-12 left-0 top-[34px] absolute bg-gray-100 rounded" />
          <div className="w-40 left-0 top-0 absolute text-gray-800 text-base font-bold font-['Asap'] leading-normal">
            Vị trí ứng tuyển*
          </div>
          <div className="w-32 left-[16px] top-[46px] absolute text-gray-500 text-base font-normal font-['Asap'] leading-normal">
            Nhập chức vụ
          </div>
        </div>
        <div className="w-40 h-20 relative">
          <div className="w-32 h-12 left-0 top-[34px] absolute rounded border border-gray-600" />
          <div className="w-40 left-0 top-0 absolute text-gray-800 text-base font-bold font-['Asap'] leading-normal">
            File CV của bạn*
          </div>
          <div className="w-20 h-6 left-[21px] top-[46px] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="w-6 h-6 relative"></div>
            </div>
            <div className="text-yellow-400 text-base font-normal font-['Asap'] leading-normal">
              TẢI LÊN
            </div>
          </div>
        </div>
        <div className="self-stretch h-11 px-6 bg-green-600 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="text-center text-white text-xl font-semibold font-['Asap'] leading-loose">
            ỨNG TUYỂN NGAY
          </div>
          <div className="w-6 h-6 px-2 py-1 justify-center items-center flex" />
        </div>
      </div>
    </div>
  );
};

const HiringCard2 = () => {
  return (
    <div className="self-stretch h-64 p-6 bg-gray-100 flex-col justify-between items-start flex">
      <div className="self-stretch h-36 flex-col justify-start items-start gap-2 flex">
        <div className="self-stretch text-black text-3xl font-bold font-['Asap'] leading-10">
          Tuyển nhân viên Zookeeper.
        </div>
        <div className="self-stretch">
          <span className="text-gray-700 text-lg font-bold font-['Asap'] leading-relaxed">
            Hạn nộp hồ sơ
          </span>
          <span className="text-gray-700 text-lg font-medium font-['Asap'] leading-relaxed">
            : 30/11/2023
          </span>
        </div>
        <div className="self-stretch h-14">
          <span className="text-gray-700 text-lg font-bold font-['Asap'] leading-relaxed">
            Yêu cầu:{" "}
          </span>
          <span className="text-gray-700 text-lg font-medium font-['Asap'] leading-relaxed">
            Phải yêu thương và thích chăm sóc động vật.
          </span>
        </div>
      </div>
      <div className="justify-start items-center gap-2 inline-flex">
        <div className="text-center text-green-600 text-xl font-medium font-['Asap'] leading-loose">
          XEM CHI TIẾT
        </div>
        <div className="w-6 h-6 px-2 py-1 justify-center items-center flex" />
      </div>
    </div>
  );
};

const HiringDetailPage = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3"></div>
      <div className="col-span-1">
        <EmployeeInfo />
      </div>
    </div>
  );
};

export default HiringDetailPage;
