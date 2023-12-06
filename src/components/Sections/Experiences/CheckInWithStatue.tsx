import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

import BgImage4 from "@/../public/assets/backgrounds/tin-tuc-va-hoat-dong/bg4.png";
import KangarooImage from "@/../public/assets/images/animals/wooden-kangaroo.png";
import Icon7 from "@/../public/assets/images/section-icons/icon7.png";

const CheckInWithStatue = () => {
  return (
    <MainContainer
      background={BgImage4.src}
      className="-mt-52 md: mt:-44 lg:-mt-48"
    >
      <div className="lg:grid lg:grid-cols-2 lg:relative flex flex-col">
        <div className="pt-10">
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

        <div className="hidden lg:absolute lg:top-[-370px] lg:right-0 pt-20 lg:flex flex-row items-center justify-center">
          <Image src={KangarooImage} alt="kangaroo" width={550} height={700} />
        </div>
        <div className="flex lg:absolute lg:top-[-370px] lg:right-0 pt-20 lg:hidden flex-row items-center justify-center">
          <Image src={KangarooImage} alt="kangaroo" width={400} height={400} />
        </div>
      </div>
    </MainContainer>
  );
};

export default CheckInWithStatue;
