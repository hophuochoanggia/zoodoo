import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import BackButton from "@/components/Buttons/BackButton";
import NewestPost from "./NewestPost";

const markdownData = ` 
Here's our logo (hover to see the title text): ất tần tật về vườn thú siêu cấp đáng yêu ZooDoo Đà Lạtất tần tật về vườn thú siêu cấp đáng yêu ZooDoo Đà Lạt ất tần tật về vườn thú siêu cấp đáng yêu ZooDoo Đà Lạt ất tần tật về vườn thú siêu cấp đáng yêu ZooDoo Đà Lạt

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

`;

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

const NewsBody = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 ">
      <div className="col-span-3 flex flex-col items-start pr-16">
        <Markdown remarkPlugins={[remarkGfm]}>{markdownData}</Markdown>
        <NewFooter />
      </div>
      <div className="col-span-1 flex flex-col items-start pt-16 lg:pt-0">
        <NewestPost />
      </div>
    </div>
  );
};

export default NewsBody;
