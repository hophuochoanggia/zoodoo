const data = [
  {
    title: "Tất tần tật về vườn thú siêu cấp đáng yêu Zoodoo Đà Lạt",
    description: "Đây là tin tức 1",
    link: "/tin-tuc-va-hoat-dong/1",
  },
  {
    title: "Tất tần tật về vườn thú siêu cấp đáng yêu Zoodoo Đà Lạt",
    description: "Đây là tin tức 2",
    link: "/tin-tuc-va-hoat-dong/1",
  },
  {
    title: "Tất tần tật về vườn thú siêu cấp đáng yêu Zoodoo Đà Lạt",
    description: "Đây là tin tức 3",
    link: "/tin-tuc-va-hoat-dong/1",
  },
  {
    title: "Tất tần tật về vườn thú siêu cấp đáng yêu Zoodoo Đà Lạt",
    description: "Đây là tin tức 4",
    link: "/tin-tuc-va-hoat-dong/1",
  },
  {
    title: "Tất tần tật về vườn thú siêu cấp đáng yêu Zoodoo Đà Lạt",
    description: "Đây là tin tức 5",
    link: "/tin-tuc-va-hoat-dong/1",
  },
];

const NewestPost = () => {
  return (
    <div className="flex flex-col">
      <div className="font-bold text-xl  pb-3">BÀI VIẾT MỚI NHẤT</div>
      <div className="flex flex-col space-y-3">
        {data.map((item, index) => (
          <button
            key={index}
            className="font-normal text-lg text-start hover:opacity-80"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewestPost;
