import { FC } from "react";
import Image from "next/image";
import { EntryCollection } from "contentful";
import { INewsSkeleton } from "@/types/contentful";

import NewCard from "@/components/Cards/NewCard";
import SectionTitle from "@/components/common/SectionTitle";

interface ISimilarNewsProps {
  similarNews: EntryCollection<INewsSkeleton, undefined, string>;
}

const SimilarNews: FC<ISimilarNewsProps> = ({ similarNews }) => {
  return (
    <div className="flex flex-col -mt-[100px] w-full">
      <div className="flex flex-col justify-center md:flex-row  md:justify-start space-y-4 lg:space-y-6 w-full items-center pb-8">
        <Image
          src={"/assets/images/section-icons/icon6.png"}
          alt="ZooDoo logo"
          width={50}
          height={50}
        />
        <p className="font-bold text-4xl text-text-default pl-4 text-center">
          Bài viết tương tự
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {similarNews.items.map((item: any, index: number) => (
          <NewCard
            key={index}
            coverImage={item.fields.coverImage}
            title={item.fields.title}
            description={item.fields.description}
            link={`/tin-tuc-va-hoat-dong/${item.fields.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarNews;
