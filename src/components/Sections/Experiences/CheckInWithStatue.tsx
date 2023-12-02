import React from "react";
import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

import Icon7 from "@/../public/assets/images/section-icons/icon7.png";
import BgImage4 from "@/../public/assets/backgrounds/experiences/bg4.png";
import KangarooImage from "@/../public/assets/images/animals/wooden-kangaroo.png";

import CenteredAndLargeActive from "@/components/Swiper/CenteredAndLargeActive";

const CheckInWithStatue = () => {
  return (
    <MainContainer background={BgImage4.src}>
      <div className="lg:grid lg:grid-cols-2 lg:relative flex flex-col">
        <div className="hidden lg:block">
          <SectionTitle
            icon={Icon7.src}
            title={"CHECK-IN CÙNG KANGAROO BẰNG GỖ TO NHẤT VIỆT NAM"}
            align="left"
            description={
              "Đến với ZooDoo không chỉ bạn được trải nghiệm tương tác với có bạn thú dể thương mà còn có thể Check-in cùng kangaroo bằng gỗ to nhất Việt Nam, bạn có thể đứng bên cạnh tượng kangaroo khổng lồ và chụp những bức ảnh độc đáo và đẹp mắt. Cảm nhận sự kỳ diệu của nghệ thuật gỗ trong việc tái hiện hình ảnh động vật này."
            }
          />
          <div className="lg:h-80" />
        </div>
        <div className="block lg:hidden">
          <SectionTitle
            icon={Icon7.src}
            title={"CHECK-IN CÙNG KANGAROO BẰNG GỖ TO NHẤT VIỆT NAM"}
            description={
              "Đến với ZooDoo không chỉ bạn được trải nghiệm tương tác với có bạn thú dể thương mà còn có thể Check-in cùng kangaroo bằng gỗ to nhất Việt Nam, bạn có thể đứng bên cạnh tượng kangaroo khổng lồ và chụp những bức ảnh độc đáo và đẹp mắt. Cảm nhận sự kỳ diệu của nghệ thuật gỗ trong việc tái hiện hình ảnh động vật này."
            }
          />
          <div className="lg:h-80" />
        </div>
        <div className="lg:absolute lg:top-[-400px] lg:right-0 pt-20 flex flex-row items-center justify-center">
          <Image src={KangarooImage} alt="kangaroo" width={550} height={700} />
        </div>
      </div>
    </MainContainer>
  );
};

export default CheckInWithStatue;
