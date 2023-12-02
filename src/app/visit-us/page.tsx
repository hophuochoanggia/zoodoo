"use client";
import React from "react";
import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";
import ZoodooMap from "@/components/Map/ZoodooMap";
import CTAButton from "@/components/Buttons/CTAButton/CTAButton";

import BG1 from "@/../public/assets/backgrounds/visit-us/bg1.png";
import BG2 from "@/../public/assets/backgrounds/visit-us/bg2.png";
import BG3 from "@/../public/assets/backgrounds/visit-us/bg3.png";
import BG4 from "@/../public/assets/backgrounds/visit-us/bg4.png";
import PriceSection from "@/components/Cards/PriceCards";

interface IBusInfoProps {
  title: string;
  time: string;
  place: string;
}

const BusInfo = ({
  title = "Chuyến đi",
  time = "9h30",
  place = "Từ BigC Đà Lạt , Cổng Hồ Thị Mậu",
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="font-semibold text-lg text-[#4B5563]">{title}</p>
      <p className="font-semibold text-2xl">{time}</p>
      <p className="font-semibold text-lg text-[#6B7280] text-center">
        {place}
      </p>
    </div>
  );
};

const PricingInfo = () => {
  return (
    <div className="w-full bg-[#F9FAFB] my-8 rounded-2xl">
      <div className="w-full  grid grid-cols-3 divide-x m-8">
        <div className="flex flex-col items-center justify-center col-span-1">
          <p className="text-center font-normal text-lg">
            Chiều cao từ 120cm trở lên
          </p>
          <div className="text-center flex flex-row items-center justify-center">
            <p className="font-bold text-lg pr-2">40 000</p>
            <p className="font-normal text-lg ">VND/ 1 Chiều</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1">
          <p className="text-center font-normal text-lg">
            Chiều cao từ 90cm - 120cm
          </p>
          <div className="text-center flex flex-row items-center justify-center">
            <p className="font-bold text-lg pr-2">10 000</p>
            <p className="font-normal text-lg ">VND/ 1 Chiều</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1">
          <p className="text-center font-normal text-lg">Chiều cao dưới 90cm</p>
          <div className="text-center flex flex-row items-center justify-center">
            <p className="font-bold text-lg pr-2">Miễn Phí</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VisitUs = () => {
  return (
    <div className="flex flex-col pt-24">
      <MainContainer>
        <SectionTitle
          icon={"/assets/images/section-icons/icon3.png"}
          title={"ĐẾN ZOODOO DALAT"}
        />
        <div className="flex flex-col justify-center items-center gap-6 max-w-7xl py-8">
          <p className="text-center font-medium ">
            ZooDoo Đà Lạt nằm trên quốc lộ 27C, cách trung tâm Đà Lạt 35km về
            phía Nha Trang.
          </p>
          <div className="rounded-md">
            <ZoodooMap width="800" height="500" borderRadius="10px" />
          </div>
        </div>
      </MainContainer>

      <MainContainer background={BG1.src}>
        <SectionTitle
          icon={"/assets/images/section-icons/icon9.png"}
          title={"Giờ hoạt động"}
        />
        <div className="flex flex-col justify-center items-center gap-6 max-w-7xl py-8 pt-0">
          <p className="text-center font-medium text-lg">
            Mở cửa các ngày trong tuần
          </p>
          <p className="text-center text-4xl ">9 giờ sáng - 6 giờ chiều</p>
          <div className="py-8">
            <CTAButton
              bgColor="orange"
              text="Gợi ý kế hoạch tham quan"
              onClick={() => {}}
            />
          </div>

          <p className="font-bold text-3xl text-[#1F2937]">
            Khi tham gia vườn thú, hãy lưu ý các thông tin sau:
          </p>
          <p className="font-bold text-xl text-[rgb(75,85,99)]">
            Hình thức tham quan
          </p>
          <p className="text-center leading-8 text-[#4B5563]">
            Tham quan vườn thú sẽ được thực hiện bằng cách đi bộ và có sự hướng
            dẫn từ zookeeper. Thời gian trung bình mỗi chuyến tham quan là từ 90
            đến 105 phút. Quý khách theo dõi hướng dẫn của zookeeper và tuân thủ
            nội quy và các quy tắc an toàn được thông báo.
          </p>

          <p className="font-bold text-xl text-[#4B5563]">Đặt vé trước</p>
          <p className="text-center leading-8 text-[#4B5563]">
            Để đảm bảo chỗ tham quan, quý khách nên đặt vé trước khi đến vườn
            thú. Việc này giúp đảm bảo rằng số lượng khách tham quan trong mỗi
            chuyến được kiểm soát và giới hạn.
          </p>
          <p className="font-bold text-xl text-[#4B5563]">
            Không mang thú cưng
          </p>
          <p className="text-center leading-8 text-[#4B5563]">
            Vì lý do an toàn và y tế, vui lòng không mang thú cưng vào khu vực
            ZooDoo. Điều này nhằm đảm bảo an toàn cho cả động vật trong vườn thú
            và các thú cưng của khách hàng. Nếu bạn có thú cưng, hãy xem xét các
            lựa chọn khác như chăm sóc thú cưng trong thời gian bạn tham quan.
          </p>
        </div>
      </MainContainer>

      <MainContainer background={BG2.src}>
        <SectionTitle
          icon={"/assets/images/section-icons/icon1.png"}
          title={"Hướng dẫn di chuyển"}
        />
        <div className="flex flex-col justify-center items-center max-w-7xl">
          <Image
            src="/assets/images/section-icons/icon10.png"
            width={64}
            height={64}
            alt="Di chuyển bằng xe "
          />
          <p className="font-bold text-3xl text-[#1F2937] text-center py-6">
            Phương tiện cá nhân
          </p>
          <p className="text-center leading-8 text-[#4B5563]">
            Để đến ZooDoo, từ Đà lạt đi theo quốc lộ 27C tới xã Đạ Nhim, huyện
            Lạc Dương, tỉnh Lâm Đồng. Tiếp tục đi thẳng trên quốc lộ 27C khoảng
            1,5 km, nhìn bên tay phải bạn sẽ đến ZooDoo.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-7xl ">
          <Image
            src="/assets/images/section-icons/icon11.png"
            width={64}
            height={64}
            alt="Di chuyển bằng bus"
          />
          <div>
            <p className="font-bold text-3xl text-[#1F2937] text-center py-6">
              Phương tiện cá nhân
            </p>
            <p className="text-center leading-8 text-[#4B5563]">
              ZooDoo cung cấp chuyến shuttle bus hằng ngày, giúp thuận tiện hơn
              để đến ZooDoo tham quan.
            </p>
            <p className="text-center leading-8 text-[#4B5563] py-4 ">
              Để đặt chỗ, vui lòng liên hệ số điện thoại:
              <a href="tel:0905333261"> 0905333261</a>
            </p>
          </div>
          <div className="w-full grid grid-cols-3 py-5">
            <div className="col-span-1">
              <BusInfo
                title="Chuyến đi"
                time="9h30"
                place="Từ BigC Đà Lạt , Cổng Hồ Thị Mậu"
              />
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <Image
                src="/assets/icons/line.png"
                width={200}
                height={64}
                alt="Di chuyển bằng bus"
              />
            </div>
            <div className="col-span-1">
              <BusInfo
                title="Chuyến về"
                time="13h00"
                place="Từ BigC Đà Lạt , Cổng Hồ Thị Mậu"
              />
            </div>
          </div>
          <PricingInfo />
        </div>
      </MainContainer>

      <MainContainer background={BG3.src}>
        <SectionTitle
          icon={"/assets/images/section-icons/icon3.png"}
          title={"GIÁ VÉ THAM QUAN"}
          align="left"
        />
        <PriceSection />
      </MainContainer>

      <MainContainer background={BG4.src}>
        <SectionTitle
          icon={"/assets/images/section-icons/icon3.png"}
          title={"GIÁ VÉ THAM QUAN"}
        />
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/assets/images/zoo-rules.png"
            alt="Company Logo"
            width={900}
            height={64}
            className="xl:p-0 px-8"
          />
          <div className="w-[900px] px-8 xl:px-0 py-8">
            <p className="text-center font-medium text-lg">
              ZooDoo là vườn thú thân thiện, nếu quý khách tuân thủ các quy định
              trên thì chúng ta sẽ cùng có một trải nghiệm tuyệt vời. ZooDoo
              chân thành cảm ơn sự hợp tác của quý khách và mong rằng ứng xử văn
              minh sẽ đồng hành cùng với chúng ta và các thế hệ sau.
            </p>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default VisitUs;
