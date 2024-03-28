import React from "react";
import BookingButton from "../Buttons/CTAButton/BookingButton";
import Booking from "../Buttons/CTAButton/Booking";

const PriceCard120 = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col justify-between items-start rounded-md h-full">
      <div className="w-full bg-[#9CA3AF] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg lg:text-2xl font-bold text-start">
          Chiều cao từ 120cm trở lên
        </p>
        <div className="flex flex-row items-end justify-center py-2 pt-4 lg:py-6 lg:pt-8">
          <p className="text-2xl lg:text-4xl font-bold pr-2">150 000</p>
          <p className="text-base lg:text-xl ">VND/Người</p>
        </div>

        <div className="flex flex-row items-end justify-center pb-6">
          <p className="text-md lg:text-lg text-[#4B5563] pr-2">
            Thời gian tham quan:{" "}
          </p>
          <p className=" text-md lg:text-lg font-bold text-[#4B5563]">
            90-120 Phút
          </p>
        </div>
        <Booking text="Đặt vé" />
      </div>
    </div>
  );
};

const PriceCard90 = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col justify-between items-start rounded-md h-full">
      <div className="w-full bg-[#9CA3AF] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg lg:text-2xl font-bold text-start">
          Chiều cao từ 90cm - 120cm
        </p>
        <div className="flex flex-row items-end justify-center py-2 pt-4 lg:py-6 lg:pt-8">
          <p className="text-2xl lg:text-4xl font-bold pr-2">75 000</p>
          <p className="text-base lg:text-xl ">VND/Người</p>
        </div>

        <div className="flex flex-row items-end justify-center pb-6">
          <p className="text-md lg:text-lg text-[#4B5563]">
            Bạn nhỏ phải có người lớn đi cùng{" "}
          </p>
        </div>
        <Booking text="Đặt vé" />
      </div>
    </div>
  );
};

const PriceCardUnder90 = () => {
  return (
    <div className="w-full bg-[#F9FAFB] flex flex-col justify-between items-start rounded-md h-full">
      <div className="w-full bg-[#9CA3AF] h-2 rounded-t-md" />
      <div className="m-4 flex flex-col justify-center items-start">
        <p className="text-lg lg:text-2xl font-bold text-start">
          Chiều cao dưới 90cm
        </p>
        <div className="flex flex-row items-end justify-center py-2 pt-4 lg:py-6 lg:pt-8">
          <p className="text-2xl lg:text-4xl font-bold">Miễn Phí</p>
        </div>

        <div className="flex flex-col lg:items-end justify-center gap-2">
          <p className="text-md lg:text-lg text-[#4B5563] text-start">
            Trẻ em phải được đi kèm với cha mẹ hoặc người giám hộ trưởng thành
            mọi lúc.
          </p>
          <p className="text-md lg:text-lg text-[#4B5563] text-start">
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
        <p className="text-xl lg:text-4xl  font-bold text-start">Gói Private</p>
        <div className="flex flex-row items-end justify-center py-4 pt-8">
          <p className="text-[#4B5563] text-md lg:text-lg">
            Gói Private mang đến cho bạn một trải nghiệm riêng biệt và tận hưởng
            sự chăm sóc cá nhân.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center gap-1 pb-4">
          <p className="font-bold text-[#1F2937] text-md lg:text-lg">
            Zookeeper riêng
          </p>
          <p className="font-bold text-[#1F2937] text-md lg:text-lg">
            Thời gian tham quan 120 phút
          </p>
          <p className="font-bold text-[#1F2937] text-md lg:text-lg">
            Hoạt động Behind-The-Scenes
          </p>
        </div>
        <BookingButton bgColor="green" text="LIÊN HỆ" className="px-10" />
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
        <p className="text-md lg:text-lg font-semibold text-start uppercase">
          Đặc quyền gói private
        </p>
        <div className="flex flex-col items-start justify-center pt-4">
          <p className="font-bold text-[#1F2937] text-md lg:text-lg">
            Zookeeper riêng
          </p>
          <p className="text-[#4B5563] text-md lg:text-lg">
            Bạn sẽ được phục vụ bởi một zookeeper riêng, người sẽ dẫn bạn đi
            trong suốt chuyến tham quan. Zookeeper sẽ cung cấp những thông tin
            chi tiết về các loài động vật, môi trường sống của chúng và công tác
            bảo tồn
          </p>
        </div>
        <div className="flex flex-col items-start justify-center pt-4">
          <p className="font-bold text-[#1F2937] text-md lg:text-lg">
            Thời gian tham quan 120 phút
          </p>
          <p className="text-[#4B5563] text-md lg:text-lg">
            Gói Private cho phép bạn tham quan các khu vực của ZooDoo trong
            khoảng thời gian kéo dài 120 phút. Bạn có thể dừng lại và tận hưởng
            mỗi khu vực theo sở thích của mình.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center pt-4 ">
          <p className="font-bold text-[#1F2937] text-md lg:text-lg">
            Hoạt động Behind-The-Scenes
          </p>
          <p className="text-[#4B5563]text-md lg:text-lg ">
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
    <div className="flex flex-col justify-center items-start gap-6 max-w-lg md:max-w-xl lg:max-w-7xl lg:py-8 pt-0">
      <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-y-4 lg:gap-6 ">
        <div className="lg:col-span-1">
          <PriceCard120 />
        </div>
        <div className="lg:col-span-1">
          <PriceCard90 />
        </div>
        <div className="lg:col-span-1">
          <PriceCardUnder90 />
        </div>
      </div>

      <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-y-4 lg:gap-6 ">
        <div className="col-span-1">
          <PrivatePriceCard />
        </div>
        <div className="col-span-2 ">
          <PrivateBenefitCard />
        </div>
      </div>

      <div className="flex flex-col justify-center py-4">
        <p className="text-lg uppercase font-semibold">Lưu ý</p>
        <ul>
          <li className="flex flex-row justify-start items-center">
            <p className="text-3xl px-2">•</p>
            <p className="text-lg text-[#4B5563] font-medium leading-[27px]">
              Vì đây là một trải nghiệm ngoài trời, chúng tôi khuyên bạn nên mặc
              quần áo thoải mái và đi giày đầy đủ.
            </p>
          </li>
          <li className="flex flex-row justify-start items-center">
            <p className="text-3xl px-2">•</p>
            <p className="text-lg text-[#4B5563] font-medium leading-[27px]">
              Để có trải nghiệm an toàn, khách phải tham gia và đi theo nhóm mọi
              lúc.
            </p>
          </li>
          <li className="flex flex-row justify-start items-center">
            <p className="text-3xl px-2">•</p>
            <p className="text-lg text-[#4B5563] font-medium leading-[27px]">
              Giá vé không bao gồm phí di chuyển, bữa ăn và đồ uống.
            </p>
          </li>
          <li className="flex flex-row justify-start items-center">
            <p className="text-3xl px-2">•</p>
            <p className="text-lg text-[#4B5563] font-medium leading-[27px]">
              Trẻ em phải được đi kèm với cha mẹ hoặc người giám hộ trưởng thành
              mọi lúc.
            </p>
          </li>
          <li className="flex flex-row justify-start items-center">
            <p className="text-3xl px-2">•</p>
            <p className="text-lg text-[#4B5563] font-medium leading-[27px]">
              Người lớn chịu trách nhiệm cho các tương tác động vật của con trẻ
            </p>
          </li>
          <li className="flex flex-row justify-start items-center">
            <p className="text-3xl px-2">•</p>
            <p className="text-lg text-[#4B5563] font-medium leading-[27px]">
              Giá vé không tăng vào các ngày Lễ Tết.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceSection;
