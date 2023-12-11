import Image from "next/image";
import { FC, ReactNode } from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { INewsItem, INewsSkeleton } from "@/types/contentful";
import { Block, Inline } from "@contentful/rich-text-types";

import NewestPost from "./NewestPost";
import NewFooter from "./NewFooter";
import { EntryCollection } from "contentful";



interface INewBodyProps {
  post: INewsItem;
  newestPosts: EntryCollection<INewsSkeleton, undefined, string>;
}

const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      return <h1 className="text-2xl font-bold text-black">{children}</h1>;
    },
    [BLOCKS.HEADING_2]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      return <h2 className="text-xl font-bold text-black">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      return <h3 className="text-lg font-bold text-black">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      return <h4 className="text-md font-bold text-black">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      return <h5 className="text-sm font-bold text-black">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      return <h6 className="text-xs font-bold text-black">{children}</h6>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      // render the EMBEDDED_ASSET as you need
      return (
        <div className="w-full flex justify-center items-center">
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
            className="rounded-lg"
          />
        </div>
      );
    },
  },
};

const NewsBody: FC<INewBodyProps> = ({
  post: {
    fields: { coverImage, title, content, date, slug },
  },
  newestPosts,
}) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 ">
      <div className="col-span-3 flex flex-col items-start pr-0 lg:pr-16">
        <div className=" contentful-container">
          {documentToReactComponents(content, renderOptions)}
        </div>
        <p className="mb-6 text-slate-400 ">
          Đăng ngày{" "}
          {new Date(date).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <NewFooter />
      </div>
      <div className="col-span-1 flex flex-col items-start pt-16 lg:pt-0">
        <NewestPost newestPosts={newestPosts} />
      </div>
    </div>
  );
};

export default NewsBody;
