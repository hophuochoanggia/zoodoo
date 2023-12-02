import React from "react";
import CTAButton from "../Buttons/CTAButton/CTAButton";

const PriceCard120 = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col justify-center items-start rounded-md">
      <div className="w-full bg-[#9CA3AF] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg font-bold text-start">
          Chiều cao từ 120cm trở lên
        </p>
        <div className="flex flex-row items-end justify-center py-6 pt-8">
          <p className="text-2xl font-bold ">150 000</p>
          <p className="text-lg ">VND/Người</p>
        </div>

        <div className="flex flex-row items-end justify-center pb-6">
          <p className="  text-[#4B5563] pr-2">Thời gian tham quan: </p>
          <p className="font-bold text-[#4B5563]">90-120 Phút</p>
        </div>
        <CTAButton bgColor="green" text="Đặt vé" onClick={() => {}} />
      </div>
    </div>
  );
};

const PriceCard90 = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col justify-center items-start rounded-md">
      <div className="w-full bg-[#9CA3AF] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg font-bold text-start">
          Chiều cao từ 90cm - 120cm
        </p>
        <div className="flex flex-row items-end justify-center py-6 pt-8">
          <p className="text-2xl font-bold ">75 000</p>
          <p className="text-lg ">VND/Người</p>
        </div>

        <div className="flex flex-row items-end justify-center pb-6">
          <p className="  text-[#4B5563]">Bạn nhỏ phải có người lớn đi cùng </p>
        </div>
        <CTAButton bgColor="green" text="Đặt vé" onClick={() => {}} />
      </div>
    </div>
  );
};

const PriceCardUnder90 = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col justify-center items-start rounded-md">
      <div className="w-full bg-[#9CA3AF] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg font-bold text-start">Chiều cao dưới 90cm</p>
        <div className="flex flex-row items-end justify-center py-4 pt-8">
          <p className="text-2xl font-bold ">Miễn Phí</p>
        </div>

        <div className="flex flex-col items-end justify-center gap-2">
          <p className="  text-[#4B5563]">
            Trẻ em phải được đi kèm với cha mẹ hoặc người giám hộ trưởng thành
            mọi lúc.
          </p>
          <p className="  text-[#4B5563]">
            Người lớn chịu trách nhiệm cho các tương tác động vật của con trẻ.
          </p>
        </div>
      </div>
    </div>
  );
};

const PrivatePriceCard = () => {
  return (
    <div className="w-full h-full bg-[#F9FAFB] flex flex-col justify-between items-start rounded-md">
      <div className="w-full bg-[#FDBC11] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg font-bold text-start">Gói Private</p>
        <div className="flex flex-row items-end justify-center py-4 pt-8">
          <p className="text-[#4B5563] ">
            Gói Private mang đến cho bạn một trải nghiệm riêng biệt và tận hưởng
            sự chăm sóc cá nhân.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-1 pb-4">
          <p className="font-bold text-[#4B5563]">Zookeeper riêng</p>
          <p className="font-bold text-[#4B5563]">
            Thời gian tham quan 120 phút
          </p>
          <p className="font-bold text-[#4B5563]">
            Hoạt động Behind-The-Scenes
          </p>
        </div>
        <CTAButton bgColor="green" text="LIÊN HỆ" onClick={() => {}} />
      </div>
      <div />
    </div>
  );
};

const PrivateBenefitCard = () => {
  return (
    <div className="w-full h-full bg-[#F9FAFB] flex flex-col justify-between items-start rounded-md">
      <div className="w-full bg-[#FDBC11] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg font-semibold text-start">
          Đặc quyền gói private
        </p>
        <div className="flex flex-col items-start justify-center pt-4">
          <p className="font-bold text-[#4B5563] ">Zookeeper riêng</p>
          <p className="text-[#4B5563] ">
            Bạn sẽ được phục vụ bởi một zookeeper riêng, người sẽ dẫn bạn đi
            trong suốt chuyến tham quan. Zookeeper sẽ cung cấp những thông tin
            chi tiết về các loài động vật, môi trường sống của chúng và công tác
            bảo tồn
          </p>
        </div>
        <div className="flex flex-col items-start justify-center pt-4">
          <p className="font-bold text-[#4B5563] ">
            Thời gian tham quan 120 phút
          </p>
          <p className="text-[#4B5563] ">
            Gói Private cho phép bạn tham quan các khu vực của ZooDoo trong
            khoảng thời gian kéo dài 120 phút. Bạn có thể dừng lại và tận hưởng
            mỗi khu vực theo sở thích của mình.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center pt-4">
          <p className="font-bold text-[#4B5563] ">
            Hoạt động Behind-The-Scenes
          </p>
          <p className="text-[#4B5563] ">
            Bạn sẽ có cơ hội tham gia vào một số hoạt động đặc biệt
            &quot;behind-the-scenes&quot; khi chăm sóc thú.
          </p>
        </div>
      </div>
      <div />
    </div>
  );
};

export const PriceSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 max-w-7xl py-8 pt-0">
      <div className="w-full grid grid-cols-3 gap-6 ">
        <div className="col-span-1">
          <PriceCard120 />
        </div>
        <div className="col-span-1">
          <PriceCard90 />
        </div>
        <div className="col-span-1">
          <PriceCardUnder90 />
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-6	">
        <div className="col-span-1">
          <PrivatePriceCard />
        </div>
        <div className="col-span-2 ">
          <PrivateBenefitCard />
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
