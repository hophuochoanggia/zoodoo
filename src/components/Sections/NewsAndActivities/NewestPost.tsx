import { INewsItem, INewsSkeleton } from "@/types/contentful";
import { EntryCollection } from "contentful";
import { FC } from "react";

interface INewestPostProps {
  newestPosts: EntryCollection<INewsSkeleton, undefined, string>;
}

const NewestPost: FC<INewestPostProps> = ({ newestPosts }) => {
  if (!newestPosts) {
    return null;
  }
  return (
    <div className="flex flex-col">
      <div className="font-bold text-xl  pb-3">BÀI VIẾT MỚI NHẤT</div>
      <div className="flex flex-col space-y-3">
        {newestPosts.items.map((item, index) => (
          <a
            key={index}
            className="font-normal text-lg text-start hover:opacity-80"
            href={`/tin-tuc-va-hoat-dong/${item.fields.slug}`}
          >
            {item.fields.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewestPost;
