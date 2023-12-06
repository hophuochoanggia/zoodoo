import Pagination from "rc-pagination";
import { useState } from "react";

import NewCard from "../../Cards/NewCard";

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "2021-07-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl nec urna aliquam ultricies. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius.",
    image: {
      url: "/assets/news/1.png",
      alt: "Image",
    },
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "2021-07-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl nec urna aliquam ultricies. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius.",
    image: {
      url: "/assets/news/2.png",
      alt: "Image",
    },
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "2021-07-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl nec urna aliquam ultricies. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius.",
    image: {
      url: "/assets/news/3.png",
      alt: "Image",
    },
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "2021-07-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl nec urna aliquam ultricies. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius.",
    image: {
      url: "/assets/news/4.png",
      alt: "Image",
    },
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "2021-07-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl nec urna aliquam ultricies. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius.",
    image: {
      url: "/assets/news/5.png",
      alt: "Image",
    },
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "2021-07-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl nec urna aliquam ultricies. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius.",
    image: {
      url: "/assets/news/6.png",
      alt: "Image",
    },
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "2021-07-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl nec urna aliquam ultricies. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius. Donec vitae nisl et augue ultricies aliquet. Integer nec quam vitae justo placerat varius.",
  },
];

const NewGridAndPagination = () => {
  const [current, setCurrent] = useState<number>(1);
  const onChange = (page: number) => {
    setCurrent(page);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-start w-full pb-8">
        <p className="font-bold text-2xl lg:text-4xl">TIN TỨC MỚI NHẤT</p>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <NewCard key={item.id} {...item} />
        ))}
      </div>
      <div className="py-8">
        <Pagination
          onChange={onChange}
          current={current}
          defaultCurrent={1}
          defaultPageSize={3}
          total={350}
          showLessItems
        />
      </div>
    </div>
  );
};

export default NewGridAndPagination;
