import React from "react";

import HiringCard from "@/components/Cards/HiringCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

import Icon4 from "@/../public/assets/images/section-icons/icon4.png";

const Hiring = () => {
  return (
    <MainContainer >
      <SectionTitle icon={Icon4.src} title={"TUYỂN DỤNG"} />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 py-16 px-2 lg:px-0">
        <HiringCard />
        <HiringCard />
        <HiringCard />
      </div>
    </MainContainer>
  );
};

export default Hiring;
