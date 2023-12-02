"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ZoodooMap from "@/components/Map/ZoodooMap";
import FollowUs from "@/components/common/FollowUs";
import Hiring from "@/components/Sections/AboutUs/Hiring";
import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

import Icon3 from "@/../public/assets/images/section-icons/icon3.png";
import Icon5 from "@/../public/assets/images/section-icons/icon5.png";
import BG1 from "@/../public/assets/backgrounds/about-us/bg1.png";
import BG2 from "@/../public/assets/backgrounds/about-us/bg2.png";
import Animal1Image from "@/../public/assets/images/animals/animals1.png";
import Animal2Image from "@/../public/assets/images/animals/animals2.png";

import PhoneIcon from "@/../public/assets/icons/contact/PhoneCall.png";
import EmailIcon from "@/../public/assets/icons/contact/Envelope.png";
import MapPinIcon from "@/../public/assets/icons/contact/MapPinLine.png";

const AboutUs = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-24">
      <MainContainer>
        <SectionTitle icon={Icon5.src} title={"Tổng Quan về ZooDoo Đà Lạt"} />
        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl py-8">
          <p className="text-center font-medium ">
            Thành lập vào năm 2015, ZooDoo Đà Lạt là một công viên động vật nằm
            tại thành phố Đà Lạt, một điểm đến du lịch nổi tiếng ở Việt Nam.
            Được thiết kế theo mô hình thân thiện tiêu chuẩn Úc duy nhất tại
            Việt Nam, công viên mang đến một trải nghiệm thú vị và hấp dẫn cho
            du khách mọi lứa tuổi.
          </p>
          <p className="text-center font-medium ">
            Với diện tích rộng lớn, ZooDoo Đà Lạt là nơi bảo tồn nhiều loài động
            vật quý hiếm được đưa về từ nước Úc xa xôi như ngựa lùn Pony, chim
            vành khuyên, cừu alpacas, chuột lang nước, và chuột túi (kangaroo)
            và nhiều loài khác. Chúng tôi đã thiết kế các khu vực động vật để mô
            phỏng môi trường sống tự nhiên của chúng, mang đến cho du khách một
            cái nhìn gần gũi về cuộc sống động vật.
          </p>
          <p className="text-center font-medium ">
            Ngoài việc khám phá các khu vực động vật, ZooDoo Đà Lạt còn có một
            quán cafe nhỏ xinh và khu cắm trại giữa đồi thông bạt ngàn đầy thơ
            mộng. Quán cafe ZooDoo Đà Lạt có tầm “view” nhìn ra thung lũng trong
            sương mờ, là nơi lý tưởng để bạn có thể thưởng thức các món ăn nhẹ
            và thư giãn giữa thiên nhiên trong xanh của Đà Lạt.
          </p>
          <p className="text-center font-medium ">
            Công viên cũng có các tiện ích và dịch vụ khác như nhà hàng, quầy
            thức ăn nhanh và cửa hàng quà lưu niệm. Du khách có thể thưởng thức
            các món ăn ngon và thức uống trong khi thư giãn sau khi khám phá
            công viên.
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[500px] relative">
          <Image
            src={Animal1Image.src}
            alt="Company Logo"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </MainContainer>
      <MainContainer background={BG1.src}>
        <div className="grid grid-cols-2 w-full gap-16">
          <div className="flex flex-col gap-6">
            <SectionTitle
              icon={Icon5.src}
              title={"TẦM NHÌN VÀ NHIỆM VỤ"}
              align="left"
            />
            <p className="text-start font-medium ">
              Một trải nghiệm đặc biệt tại Zoodoo là bạn có thể tham gia vào
              hoạt động cho các bạn thú ăn. Điều này cho phép bạn tham gia trực
              tiếp vào quá trình chuẩn bị và cung cấp thức ăn cho các loài động
              vật.
            </p>
            <p className="text-start font-medium ">
              Một trải nghiệm đặc biệt tại Zoodoo là bạn có thể tham gia vào
              hoạt động cho các bạn thú ăn. Điều này cho phép bạn tham gia trực
              tiếp vào quá trình chuẩn bị và cung cấp thức ăn cho các loài động
              vật.Một trải nghiệm đặc biệt tại Zoodoo là bạn có thể tham gia vào
              hoạt động cho các bạn thú ăn. Điều này cho phép bạn tham gia trực
              tiếp vào quá trình chuẩn bị và cung cấp thức ăn cho các loài động
              vật. Một trải nghiệm đặc biệt tại Zoodoo.
            </p>
          </div>

          <div className="">
            <Image
              src={Animal2Image.src}
              alt="Company Logo"
              width={600}
              height={600}
            />
          </div>
        </div>
      </MainContainer>
      <MainContainer>
        <div className="flex flex-col gap-32">
          <div className="grid grid-cols-2 w-full gap-16">
            <div className="flex flex-col gap-6">
              <SectionTitle
                icon={Icon3.src}
                title={"LIÊN HỆ  VỚI CHÚNG TÔI"}
                align="left"
              />
              <div className="flex flex-col py-6 gap-4 justify-between">
                <div className="flex flex-col py-6 gap-4">
                  <div className="flex flex-row justify-start items-center">
                    <Image
                      src={PhoneIcon.src}
                      alt="Phone Icon"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">090 7110 007 </span>
                  </div>
                  <a
                    className="flex flex-row justify-start items-center"
                    href={"mailto:hello@zoodoodalat.com"}
                  >
                    <Image
                      src={EmailIcon.src}
                      alt="Mail Icon"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">hello@zoodoodalat.com </span>
                  </a>
                  <div className="flex flex-row justify-start items-center">
                    <Image
                      src={MapPinIcon.src}
                      alt="Map Icon"
                      width={30}
                      height={30}
                    />
                    <span className="ml-2">
                      4H6P+VG6, ĐT723, Xã Đạ Nhim, Lạc Dương, Lâm Đồng
                    </span>
                  </div>
                </div>
                <FollowUs color="text-text-black" />
              </div>
            </div>
            <div className="pt-16">
              <ZoodooMap />
            </div>
          </div>

          <div
            className="w-full h-64 bg-cover bg-center flex flex-col items-center  justify-center rounded-lg"
            style={{
              backgroundImage: `url(${BG2.src})`,
            }}
          >
            <button
              className="p-4 bg-green-light text-white rounded-md"
              onClick={() => router.push("/contact-us")}
            >
              LIÊN HỆ HỢP TÁC
            </button>
          </div>
        </div>
      </MainContainer>

      <div className="-mt-24">
        <Hiring />
      </div>
    </div>
  );
};

export default AboutUs;
