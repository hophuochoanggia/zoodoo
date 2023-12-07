import Image from "next/image";
import { FC, ReactNode } from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { INewsItem } from "@/types/contentful";
import { Block, Inline } from "@contentful/rich-text-types";

import NewestPost from "./NewestPost";
import BackButton from "@/components/Buttons/BackButton";

const NewFooter = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center pt-10">
      <BackButton color="#000000" />
      <div className="flex flex-row space-x-6">
        <div className="flex items-end text-black font-normal text-base">
          Share
        </div>
        <Image
          src="/assets/socials/facebook.png"
          width={40}
          height={40}
          alt="facebook"
        />
        <Image
          src="/assets/socials/insta.png"
          width={40}
          height={40}
          alt="instagram"
        />
      </div>
    </div>
  );
};

interface INewBodyProps {
  content: INewsItem;
}

const renderOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: (
      node: Block | Inline,
      children: ReactNode
    ): ReactNode => {
      return <h3 className="text-2xl font-bold text-black">{children}</h3>;
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
  content: {
    fields: { coverImage, title, content, date, slug },
  },
}) => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 ">
      <div className="col-span-3 flex flex-col items-start pr-16">
        {/* <Markdown remarkPlugins={[remarkGfm]}>{markdownData}</Markdown> */}
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
        <NewestPost />
      </div>
    </div>
  );
};

export default NewsBody;
