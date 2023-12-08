import React from "react";

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

export default HiringCard2;
