import Image from "next/image";
import RulesBG from "@/../public/assets/backgrounds/rules-bg.png";

const ZooDooRules = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center text-white pt-32 pb-16 lg:pt-24 lg:pb-24  object-cover max-w-5xl flex flex-col items-center justify-center space-y-8"
      style={{
        backgroundImage: `url(${RulesBG.src})`,
      }}
    >
      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule1.png"}
            alt="rule 1"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 1
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            <span className="font-bold ">TUYỆT ĐỐI</span> không mang thức ăn,
            nước uống từ bên ngoài vào. Chỉ cho thú ăn bằng thức ăn được cung
            cấp bởi ZooDoo
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule2.png"}
            alt="rule 2"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 2
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            Quý khách đi cùng với trẻ em phải tự quản lý con em mình và{" "}
            <span className="font-bold "> TỰ CHỊU TRÁCH NHIỆM</span> mọi va chạm
            với động vật (nếu có).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule3.png"}
            alt="rule 3"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 3
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            <span className="font-bold ">TẮT ĐÈN FLASH</span> khi chụp ảnh.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule4.png"}
            alt="rule 4"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 4
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            Cư xử văn minh nơi công cộng, đi nhẹ, nói khẽ, không gây ồn ào.
            Không trêu đùa, la hét, chọc phá hoặc rượt đuổi thú.
            <span className="font-bold "> TUYỆT ĐỐI KHÔNG </span>
            ném bất cứ vật gì vào thú.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule5.png"}
            alt="rule 5"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 5
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            <span className="font-bold "> TUYỆT ĐỐI KHÔNG HÚT THUỐC </span>
            trong khu vực vườn thú.{" "}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule6.png"}
            alt="rule 6"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 6
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            Phần lớn tour sẽ di chuyển trong rừng thông nên có nhiều rễ cây,
            tránh mang giày cao gót hoặc dép lê. ZooDoo không chịu trách nhiệm
            cho bất cứ sự cố vấp ngã nào (nếu có).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule7.png"}
            alt="rule 7"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 7
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            <span className="font-bold ">BẮT BUỘC </span>
            phải đi theo đoàn, không tự ý tách đoàn, nghe theo sự hướng dẫn của
            nhân viên ZooDoo.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 px-10 lg:px-20 gap-x-4 lg:gap-x-8">
        <div className="col-span-1 lg:col-span-1">
          <Image
            src={"/assets/images/rules/rule8.png"}
            alt="rule 8"
            width={220}
            height={220}
          />
        </div>

        <div className="col-span-3 lg:col-span-5 flex flex-col justify-center items-start ">
          <p className="text-[#374151] font-bold text-lg lg:text-2xl leading-9">
            Điều 8
          </p>
          <p className="text-[#374151] text-lg lg:text-2xl leading-9">
            Nhân viên ZooDoo
            <span className="font-bold "> CÓ QUYỀN </span>
            từ chối phục vụ và mời bạn ra ngoài vườn thú
            <span className="font-bold "> NGAY LẬP TỨC </span>
            nếu như bạn vi phạm bất kì quy định nào ở trên.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZooDooRules;
