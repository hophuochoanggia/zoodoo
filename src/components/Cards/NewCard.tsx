import Image from "next/image";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { INewsSkeleton } from "@/types/contentful";

import NewImage from "@/../public/assets/images/news/new1.png";
import { FC } from "react";

import { checkHttpContentfulPrefix } from "@/utils/checkHttpPrefix";

interface INewCardProps {
  item: any;
}

const NewCard: FC<INewCardProps> = ({ item }) => {
  const router = useRouter();

  const { slug, title, content, coverImage } = item.fields;

  return (
    <button
      className="bg-gray-light border-none rounded-lg shadow hover:opacity-80"
      onClick={() => {
        router.push(`/tin-tuc-va-hoat-dong/${slug}`);
      }}
    >
      <div className="relative pb-80 overflow-hidden rounded-t-lg">
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={checkHttpContentfulPrefix(coverImage.fields.file.url)}
          alt="Article"
          layout="fill"
        />
      </div>
      <div className="p-5 flex flex-col">
        <a href="#">
          <h5 className="mb-3 text-text-default font-bold text-xl lg:text-3xl text-start">
            {title}
          </h5>
        </a>
        <p className="text-base lg:text-lg font-normal text-gray-700 dark:text-gray-400 line-clamp-2 text-start">
          {content?.content[0]?.content[0]?.value}
        </p>
        <div
          className={clsx(
            "inline-flex items-center justify-start py-3 border border-transparent bg-transparent "
          )}
        >
          <span
            className={clsx("pr-2 uppercase text-lg lg:text-xl text-[#39B33A]")}
          >
            Xem thêm
          </span>
          <svg
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill={"#39B33A"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.2045 13.2046C0.765166 13.6439 0.765166 14.3561 1.2045 14.7955C1.64384 15.2348 2.35616 15.2348 2.79549 14.7955L8.79545 8.7955C9.23105 8.35999 9.2354 7.65522 8.8052 7.21437L2.95128 1.21437C2.51738 0.769645 1.80513 0.76087 1.36041 1.19478C0.915691 1.62867 0.906917 2.34092 1.34081 2.78565L6.41874 7.99027L1.2045 13.2046Z"
              fill={"#39B33A"}
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default NewCard;
