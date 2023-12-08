import HiringForm from "@/components/Form/HiringForm";

const EmployerInfo = () => {
  return (
    <div className="flex flex-col justify-start items-start  w-full space-y-6">
      <div className="w-full px-6 py-8 bg-green-900 rounded-lg border border-gray-300 flex-col justify-start items-start gap-6 flex">
        <div className="text-white text-3xl font-bold ] leading-10">
          Gửi hồ sơ ứng tuyển
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
          <div className=" text-white text-lg font-medium ] leading-relaxed">
            Gửi hồ sơ ứng tuyển qua email
          </div>
          <div className=" text-white text-lg font-bold ] leading-relaxed">
            demo@gmail.com
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
          <div className=" text-white text-lg font-medium ] leading-relaxed">
            Hoặc liên hệ qua số điện thoại
          </div>
          <div className=" text-white text-lg font-bold ] leading-relaxed">
            0123456789
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-8 bg-gray-50 rounded-lg border border-gray-300 flex-col justify-start items-start gap-6 inline-flex">
        <div className="text-black text-3xl font-bold  leading-10">
          Nộp hồ sơ trực tuyến
        </div>
        <HiringForm />
      </div>
    </div>
  );
};

export default EmployerInfo;
