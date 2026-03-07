import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Toán Tư Duy MMABC | Lớp Toán Tư Duy Cho Trẻ 4-14 Tuổi",
  description:
    "Trung tâm Toán Tư Duy MMABC tại Thôn 1, Xã Vạn Phúc, Huyện Thanh Trì, Hà Nội. Giúp trẻ phát triển tư duy logic, tăng tập trung và tính nhẩm nhanh.",
  keywords: [
    "toán tư duy",
    "toán tư duy MMABC",
    "toán tư duy thanh trì",
    "toán tư duy cho trẻ",
    "lớp toán tư duy 4-14 tuổi",
    "toán tư duy vạn phúc",
    "trung tâm toán tư duy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-theme="light">
      <body>
        <div className="site-wrapper">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
