import { FC } from "react";
import Image from "next/image";
import { EntryCollection } from "contentful";
import { INewsSkeleton } from "@/types/contentful";

import NewCard from "@/components/Cards/NewCard";

interface ISimilarNewsProps {
  similarNews: EntryCollection<INewsSkeleton, undefined, string>;
}

const SimilarNews: FC<ISimilarNewsProps> = ({ similarNews }) => {
  return (
    <div className="flex flex-col -mt-[100px] w-full">
      <div className="flex flex-row items-center justify-start py-10">
        <div className="flex items-center">
          <Image
            src={"/assets/images/section-icons/icon6.png"}
            alt="ZooDoo logo"
            width={50}
            height={50}
          />
        </div>
        <p className="font-bold text-4xl text-text-default w-[600px] text-start pl-4">
          Bài viết tương tự
        </p>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-8">
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
