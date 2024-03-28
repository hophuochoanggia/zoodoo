"use client";
import React, { FC, useState } from "react";

import { BookingWidget } from "../../BookingWidget";
import { Button } from "../../atom/button";
import Image from "next/image";
import RightChevron from "../../../../public/assets/icons/chevron-forward-outline.svg";

const DESCRIPTION =
  "ZooDoo sẽ liên hệ lại với quý khách để xác nhận booking trong vòng 24h. \nQuý khách vui lòng kiểm tra phần số điện thoại để ZooDoo có thể liên lạc với mình một cách nhanh nhất.\n\n*Hình thức tham quan:\nTham quan vườn thú sẽ được thực hiện bằng cách đi bộ và có sự hướng dẫn từ zookeeper. Thời gian trung bình mỗi chuyến tham quan là từ 90 đến 105 phút. Quý khách theo dõi hướng dẫn của zookeeper và tuân thủ nội quy và các quy tắc an toàn được thông báo.\n\n*Đặt vé trước: Để đảm bảo chỗ tham quan, quý khách nên đặt vé trước khi đến vườn thú. Việc này giúp đảm bảo rằng số lượng khách tham quan trong mỗi chuyến được kiểm soát và giới hạn.\n\n*Không mang thú cưng: Vì lý do an toàn và y tế, vui lòng không mang thú cưng vào khu vực ZooDoo. Điều này nhằm đảm bảo an toàn cho cả động vật trong vườn thú và các thú cưng của khách hàng.";

const ADDRESS =
  "ZooDoo, tiểu khu 94A, xã Đạ Nhim, huyện Lạc Dương, tỉnh Lâm Đồng";

const TITLE = "Tham quan vườn thú ZooDoo";

const Booking: FC<{ text: string }> = ({ text }) => {
  return (
    <BookingWidget
      className="px-10 py-2"
      title={TITLE}
      description={DESCRIPTION}
      address={ADDRESS}
      trigger={
        <Button className="inline-flex rounded-lg items-center justify-center px-10 py-6 border border-transparent text-lg lg:text-xl fot-medium text-white hover:scale-105 bg-green-light hover:bg-green-500">
          {text}&nbsp;
          <Image priority src={RightChevron} alt="next svg" />
        </Button>
      }
    />
  );
};

export default Booking;
