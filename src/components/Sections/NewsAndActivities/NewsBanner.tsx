"use client";
import { FC } from "react";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";

import { Text } from "@contentful/rich-text-types";
import { INewsFields, INewsSkeleton } from "@/types/contentful";

import CTAButtonTransperent from "@/components/Buttons/CTAButton/CTAButtonTransperent";

interface INewsBannerProps {
  post: {
    fields: INewsFields;
  };
}

const NewsBanner: FC<INewsBannerProps> = ({ post }) => {
  const { title, slug, content, description } = post.fields;

  const router = useRouter();

  const handleSeeMore = () => {
    router.push(`/tin-tuc-va-hoat-dong/${slug}`);
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 py-16 pt-44">
      <div className="lg:col-span-3 flex flex-col  lg:pr-16 lg:mr-16  ">
        <div className=" text-text-title text-2xl lg:text-4xl">
          HOẠT ĐỘNG NỔI BẬT
        </div>
        <div className="text-3xl lg:text-5xl text-text-title font-bold leading-normal lg:leading-[72px]">
          {title.toString()}
        </div>
        <div className="font-medium text-lg text-text-gray leading-7 py-3">
          {(description?.content[0].content[0] as Text).value}
        </div>
        <div className="flex items-start">
          <CTAButtonTransperent text="Xem thêm" onClick={handleSeeMore} />
        </div>
      </div>
      <div className="lg:col-span-2">
        <Image
          src={`https:${post?.fields?.coverImage?.fields?.file?.url}`}
          layout="responsive"
          width={200}
          height={200}
          className="rounded-lg"
          alt={title}
          priority
        />
      </div>
    </div>
  );
};

export default NewsBanner;
