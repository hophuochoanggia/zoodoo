import React, { FC } from "react";

import HiringCard from "@/components/Cards/HiringCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

import Icon4 from "@/../public/assets/images/section-icons/icon4.png";

interface IHiringProps {
  hiringJobs: any;
}

const Hiring: FC<IHiringProps> = ({ hiringJobs }) => {
  return (
    <MainContainer>
      <SectionTitle icon={Icon4.src} title={"TUYỂN DỤNG"} />
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 py-16 mx-6 lg:mx-0">
        {hiringJobs.items.map((item: any) => {
          return (
            <div key={item.fields.slug}>
              <HiringCard job={item.fields} />
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
};

export default Hiring;
