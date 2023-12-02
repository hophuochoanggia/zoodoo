import Image from "next/image";

import NewCard from "../../Cards/NewCard";

const data = [];

const SimilarNews = () => {
  return (
    <div className="flex flex-col -mt-[100px]">
      <div className="flex flex-row items-center justify-start py-10">
        <div className="flex items-center">
          <Image
            src={"/assets/images/icon6.png"}
            alt="Company Logo"
            width={50}
            height={50}
          />
        </div>
        <p className="font-bold text-4xl text-text-default w-[600px] text-start pl-4">
          Bài viết tương tự
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <NewCard />
        <NewCard />
        <NewCard />
      </div>
    </div>
  );
};

export default SimilarNews;
