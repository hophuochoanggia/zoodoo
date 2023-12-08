"use client";
import Pagination from "rc-pagination";
import { useState, FC, useEffect } from "react";

import NewCard from "../../Cards/NewCard";
import { createClient } from "contentful";
import { INewsSkeleton, INewItems } from "@/types/contentful";

const POST_PER_PAGE = 1;

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID ?? "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESSTOKEN ?? "",
});

const getBlogEntries = async (page: number, limit: number) => {
  const response = await client.getEntries<INewsSkeleton>({
    content_type: "news",
    // sort latest first
    order: ["-sys.createdAt"],
    skip: (page - 1) * limit,
    limit: limit,
  });

  const totalEntries = response.total;
  const totalPages = Math.ceil(totalEntries / limit);

  return {
    entries: response.items,
    totalPages: totalPages,
  };
};

const NewGridAndPagination: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [blogItems, setBlogItems] = useState<INewItems>([]);

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  const skipToEnd = () => {
    setCurrentPage(totalPages);
  };

  const skipToStart = () => {
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchBlogEntries = async () => {
      const { entries, totalPages } = await getBlogEntries(
        currentPage,
        POST_PER_PAGE
      );
      setBlogItems(entries);
      setTotalPages(totalPages);
    };
    fetchBlogEntries();
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-start w-full pb-8">
        <p className="font-bold text-3xl lg:text-5xl">TIN TỨC MỚI NHẤT</p>
      </div>
      <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-8">
        {blogItems.map((item) => (
          <NewCard key={item?.fields?.slug} item={item} />
        ))}
      </div>
      <div className="py-8 flex flex-row">
        <button onClick={skipToStart} className="skip-to-start"></button>
        <Pagination
          onChange={onChange}
          current={currentPage}
          defaultCurrent={1}
          defaultPageSize={POST_PER_PAGE}
          total={totalPages}
          showLessItems
        />
        <button onClick={skipToEnd} className="skip-to-end"></button>
      </div>
    </div>
  );
};

export default NewGridAndPagination;
