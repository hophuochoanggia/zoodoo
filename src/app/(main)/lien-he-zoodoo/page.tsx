"use client";
import * as yup from "yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { sendMail } from "@/lib/sendMail";

import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

import BG from "@/../public/assets/backgrounds/lien-he-zoodoo/bg.png";
import Icon8 from "@/../public/assets/images/section-icons/icon8.png";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  mobile: yup.string().required(),
  note: yup.string(),
  jobTitle: yup.string().required(),
  company: yup.string().required(),
});

interface IFormInputs {
  name: string;
  email: string;
  mobile: string;
  note?: string;
  jobTitle: string;
  company: string;
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormInputs) => {
    const res = await sendMail({
      ...data,
    });

    //TODO: add toast
  };

  return (
    <div className="flex flex-col pt-28 md:pt-0  ">
      <MainContainer background={BG.src} className="2xl:py-44 py-26">
        <SectionTitle title={"LIÊN HỆ HỢP TÁC"} icon={Icon8.src} />
        <div className=" bg-white p-6 rounded-lg lg:w-[700px]">
          <form action={"https://submit-form.com/AvQV0XZKx"}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Họ tên
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-gray-500"
                placeholder="Nhập họ tên"
                required
                {...register("name", { required: true, maxLength: 80 })}
              />
            </div>
            <div className="flex flex-row w-full mb-5 space-x-6">
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-md font-semibold text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-gray-500"
                  placeholder="Nhập email"
                  required
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-md font-semibold text-gray-900"
                >
                  Số điện thoại
                </label>
                <input
                  type="mobile"
                  id="mobile"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-gray-500"
                  placeholder="Số điện thoại"
                  required
                  {...register("mobile", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="jobTitle"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Công ty / tên doanh nghiệp
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-gray-500"
                placeholder="Nhập công ty / tên doanh nghiệp"
                required
                {...register("company", { required: true, maxLength: 80 })}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="note"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Chức vụ
              </label>
              <input
                type="text"
                id="jobTitle"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-gray-500"
                placeholder="Nhập chức vụ"
                required
                {...register("jobTitle", { required: true })}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="note"
                className="block mb-2 text-md font-semibold text-gray-900"
              >
                Tin nhắn cho ZooDoo (Nếu có)
              </label>
              <textarea
                id="note"
                className="bg-gray-100 border p-2 h-40 border-gray-300 text-gray-900 text-sm rounded-lg block w-full focus:ring-1 focus:outline-none focus:ring-gray-500"
                placeholder="Nhập tin nhắn cho ZooDoo"
                {...register("note")}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-green-light font-medium rounded-lg text-sm px-5 py-3 text-center w-full flex flex-row justify-center items-center gap-4"
              onClick={() => handleSubmit(onSubmit)}
            >
              GỬI THÔNG TIN
              <Image
                src={"/assets/icons/chevron_right_white.svg"}
                alt="summit-icon"
                width={12}
                height={12}
              />
            </button>
          </form>
        </div>
      </MainContainer>
    </div>
  );
};

export default ContactUs;
