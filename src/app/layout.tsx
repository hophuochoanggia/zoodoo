import type { Metadata } from "next";
import { Asap } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";
import FooterMobile from "@/components/Footer/FooterMobile";

const asap = Asap({ subsets: ["vietnamese"] });

// TODO: check server side rendering for each component

export const metadata: Metadata = {
  title: "Zoodoo - VƯỜN THÚ THÂN THIỆN CHUẨN ÚC ĐẦU TIÊN TẠI VIỆT NAM",
  icons: {
    icon: [
      {
        url: "/assets/images/logo-zoodoo-green.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/images/logo-zoodoo-white.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  description:
    "Chào mừng bạn đến với Zoodoo, điểm đến kỳ diệu của động vật hoang dã độc đáo tại Việt Nam! Hòa mình vào những môi trường đa dạng của các loài kangaroo, koala và những sinh vật biểu tượng khác của Australia. Tại Zoodoo, chúng tôi hòa quyện niềm phấn khởi khám phá với sự hứng thú của việc học, mang đến trải nghiệm khó quên cho du khách. Cam kết của chúng tôi đối với bảo tồn động vật hoang dã nằm tại trái tim mọi hoạt động. Hãy cùng tham gia hành trình vượt qua giới giải trí, tạo nên một liên kết sâu sắc giữa bạn và những động vật hoang dã tuyệt vời của chúng tôi. Khám phá Zoodoo, nơi trái tim hoang dã của Việt Nam đập mạnh hơn bao giờ hết.",
  openGraph: {
    type: "website",
    locale: "vn_VN",
    url: "https://www.zoodoo.vn/",
    title: "Zoodoo - VƯỜN THÚ THÂN THIỆN CHUẨN ÚC ĐẦU TIÊN TẠI VIỆT NAM",
    description:
      "Chào mừng bạn đến với Zoodoo, điểm đến kỳ diệu của động vật hoang dã độc đáo tại Việt Nam! Hòa mình vào những môi trường đa dạng của các loài kangaroo, koala và những sinh vật biểu tượng khác của Australia. Tại Zoodoo, chúng tôi hòa quyện niềm phấn khởi khám phá với sự hứng thú của việc học, mang đến trải nghiệm khó quên cho du khách. Cam kết của chúng tôi đối với bảo tồn động vật hoang dã nằm tại trái tim mọi hoạt động. Hãy cùng tham gia hành trình vượt qua giới giải trí, tạo nên một liên kết sâu sắc giữa bạn và những động vật hoang dã tuyệt vời của chúng tôi. Khám phá Zoodoo, nơi trái tim hoang dã của Việt Nam đập mạnh hơn bao giờ hết.",
    images: [
      {
        url: "/assets/images/logo-zoodoo-white.png",
        width: 1200,
        height: 630,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    site: "@zoodoo",
  },
  metadataBase: new URL("https://www.zoodoo.vn/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${asap.className} flex flex-col w-screen bg-[#FFF9E9] justify-between min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <FooterMobile />
      </body>
    </html>
  );
}
