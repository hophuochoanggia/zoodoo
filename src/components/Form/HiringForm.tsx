"use client";
import * as yup from "yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { checkFileUnder5Mb, checkCVFormat } from "@/utils/fileValidation";

const schema = yup.object().shape({
  name: yup.string().required(),
  mobile: yup.string().required(),
  email: yup.string().email().required(),
  position: yup.string().required(),
  cv: yup.mixed<File>().required(),
});

interface IFormInputs {
  name: string;
  mobile: string;
  email: string;
  position: string;
  cv: File;
}

const HiringForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onUploadCV = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      if (!checkFileUnder5Mb(file) || !checkCVFormat(file)) {
        setError("cv", {
          type: "manual",
          message: "File nhỏ hơn 5Mb và định dạng pdf hoặc word",
        });
        e.target.value = "";
      }
      setValue("cv", file);
    }
  };

  const onSubmit = async (data: IFormInputs) => {
    const fields = { fields: data };
    console.log(fields);
  };

  return (
    <form className="w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-md font-medium text-gray-900"
        >
          Họ tên*
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

      <div className="mb-5">
        <label
          htmlFor="mobile"
          className="block mb-2 text-md font-medium text-gray-900"
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

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-md font-medium text-gray-900"
        >
          Email*
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-gray-500"
          placeholder="Số điện thoại"
          required
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">Email không hợp lệ</p>
        )}
      </div>

      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-md font-medium text-gray-900"
        >
          Vị trí ứng tuyển*
        </label>
        <input
          type="text"
          id="position"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-1 focus:outline-none focus:ring-gray-500"
          placeholder="Nhập chức vụ"
          required
          {...register("position", { required: true, maxLength: 80 })}
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="cv"
          className="block mb-2 text-md font-medium text-gray-900"
        >
          File CV của bạn*
        </label>
        <input
          className="block w-full text-md cursor-pointer bg-gray-50focus:outline-none"
          id="cv"
          type="file"
          required
          onChange={onUploadCV}
        />
        {errors.cv && (
          <p className="text-red-500 text-sm mt-1">{errors.cv.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-green-light font-medium rounded-lg text-lg px-5 py-3 text-center w-full flex flex-row justify-center items-center gap-4"
        onClick={() => handleSubmit(onSubmit)}
      >
        ỨNG TUYỂN NGAY
        <Image
          src={"/assets/icons/chevron_right.svg"}
          alt="summit-icon"
          width={12}
          height={12}
          color="white"
        />
      </button>
    </form>
  );
};

export default HiringForm;
