"use client";
import { useRouter } from "next/navigation";
import Pagination from "rc-pagination";
import { FC } from "react";

interface ICustomPaginationProps {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
}

const CustomPagination: FC<ICustomPaginationProps> = ({
  currentPage,
  totalPages,
  postsPerPage,
}) => {
  const router = useRouter();

  const onChange = (page: number) => {
    router.push(`/tin-tuc-va-hoat-dong?page=${page}`);
  };

  const skipToEnd = () => {
    onChange(totalPages);
  };

  const skipToStart = () => {
    onChange(1);
  };

  return (
    <div className="py-8 flex flex-row">
      <button onClick={skipToStart} className="skip-to-start"></button>
      <Pagination
        onChange={onChange}
        current={currentPage}
        defaultCurrent={1}
        defaultPageSize={postsPerPage}
        total={totalPages}
        showLessItems
      />
      <button onClick={skipToEnd} className="skip-to-end"></button>
    </div>
  );
};

export default CustomPagination;
