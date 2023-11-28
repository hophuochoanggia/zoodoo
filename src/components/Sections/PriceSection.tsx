import Image from "next/image";

import CTAButton from "@/components/Buttons/CTAButton/CTAButton";

import BG2 from "../../../public/assets/backgrounds/bg2.png";

import AnimalsImage2 from "../../../public/assets/images/animals2.png";

interface IPriceSectionProps {
  svg: string;
  title: string;
  description: string;
  picture: string;
}

const priceData = [
  {
    height: "CHIỀU CAO TỪ 120CM TRỞ LÊN",
    price: "150 000",
  },
  {
    height: "CHIỀU CAO TỪ 90CM - 120CM",
    price: "75 000",
  },
  {
    height: "CHIỀU CAO DƯỚI 90CM",
    price: "0",
  },
];

const PricesAndNotice = () => {
  const renderPrice = (height: string, price: string) => {
    return (
      <div className="flex flex-row pt-4">
        <div className="w-10 h-5 bg-orange-200 rounded-[4px] mr-4 mt-1" />
        <div className="flex flex-col items-start justify-start space-y-4 w-full">
          <p className="text-text-default font-normal uppercase text-2xl">
            {height}
          </p>
          {price === "0" ? (
            <p className="text-text-default font-bold">Miễn phí</p>
          ) : (
            <div className="flex flex-row space-x-2">
              <p className="text-text-default font-semibold">{price}</p>
              <p className="text-text-default font-bold">VNĐ/người</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-start justify-start space-y-6 w-full">
      <p className="text-text-default font-semibold">
        Giá vé tính theo chiều cao:
      </p>
      {priceData.map((item, index) => (
        <div key={index}>renderPrice(item.height, item.price)</div>
      ))}
      <div className="py-2">
        <CTAButton
          text="Đặt vé ngay"
          onClick={() => console.log("Đặt vé ngay")}
          bgColor="orange"
        />
      </div>
      <p className="text-text-default font-semibold">Lưu ý</p>
      <p className="text-text-default font-normal">
        - Giá vé cho một chuyến tham quan 90 - 110 phút.
      </p>
      <p className="text-text-default font-normal">
        - Trẻ em phải được đi kèm với cha mẹ hoặc người giám hộ.
      </p>
      <p className="text-text-default font-normal">
        - Người lớn chịu trách nhiệm với các con trẻ của mình.
      </p>
    </div>
  );
};

const PriceSection = () => {
  return (
    <div
      className="bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-50px]"
      style={{
        backgroundImage: `url(${BG2.src})`,
      }}
    >
      <div className="flex flex-col items-center justify-center max-w-7xl space-y-20 py-28">
        <div className="flex flex-col items-start justify-center space-y-6 w-full">
          <div className="flex items-center">
            <Image
              src="/assets/images/icon3.png"
              alt="Company Logo"
              width={60}
              height={60}
            />
          </div>
          <div className="font-bold text-4xl text-text-default">
            Giá vé tham quan
          </div>
          <div className="w-4/5 text-text-default text-start py-4 font-semibold">
            Các hoạt động tham quan vườn thú mang đến cho bạn một trải nghiệm
            thú vị và gần gũi với thế giới động vật. Bạn sẽ được tương tác với
            các sinh vật đáng yêu, mà còn có thể biết thêm nhiều kiến thức mới
            về môi trường sống của các loài vật này. Bạn có thể vừa tương tác,
            vừa cho ăn và chụp ảnh với các bạn thú đáng yêu khi đến đây tham
            quan.
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
            <PricesAndNotice />
            <div className="w-full aspect-square relative">
              <Image
                src={AnimalsImage2.src}
                alt="Company Logo"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
