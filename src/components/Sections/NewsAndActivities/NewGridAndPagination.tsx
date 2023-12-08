"use client";
import { FC, useEffect, useState } from "react";

import CustomPagination from "../../common/Pagination";

import { initContentfulClient } from "@/lib/contentful";
import { INewItems, INewsSkeleton } from "@/types/contentful";

import NewCard from "../../Cards/NewCard";

export const POSTS_PER_PAGE = 1;  

const getBlogEntries = async (page: number, limit: number) => {
  const response = await initContentfulClient.getEntries<INewsSkeleton>({
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
        POSTS_PER_PAGE
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
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        postsPerPage={POSTS_PER_PAGE}
      />
    </div>
  );
};

export default NewGridAndPagination;
