import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog Toán Tư Duy Cho Phụ Huynh | Toán Tư Duy MMABC",
  description:
    "Chia sẻ kiến thức về toán tư duy, cách giúp trẻ yêu thích môn Toán và các bài tập gợi ý dành cho phụ huynh có con từ 4–14 tuổi.",
  keywords: [
    "blog toán tư duy",
    "lợi ích của toán tư duy",
    "bài tập toán tư duy cho bé 5 tuổi",
    "cách giúp trẻ học toán tốt hơn",
    "phương pháp luyện tính nhẩm",
  ],
};

const posts = [
  {
    title: "Lợi ích của toán tư duy đối với trẻ 4–14 tuổi",
    excerpt:
      "Tại sao ngày càng nhiều phụ huynh lựa chọn cho con học toán tư duy? Cùng tìm hiểu 5 lợi ích nổi bật.",
    tag: "Lợi ích toán tư duy",
  },
  {
    title: "Bài tập toán tư duy cho bé 5 tuổi tại nhà",
    excerpt:
      "Một số gợi ý bài tập đơn giản, dễ áp dụng giúp bé 5 tuổi làm quen với số và hình ngay tại nhà.",
    tag: "Bài tập cho bé 5 tuổi",
  },
  {
    title: "Cách giúp trẻ học toán tốt hơn mà không áp lực",
    excerpt:
      "Thay đổi cách đồng hành cùng con, tập trung vào quá trình thay vì chỉ điểm số để con bớt sợ môn Toán.",
    tag: "Kinh nghiệm cho phụ huynh",
  },
  {
    title: "Phương pháp luyện tính nhẩm nhanh cho học sinh tiểu học",
    excerpt:
      "Một số mẹo nhỏ và trò chơi thú vị giúp học sinh tiểu học luyện tính nhẩm nhanh và chính xác hơn.",
    tag: "Luyện tính nhẩm",
  },
];

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Blog Toán Tư Duy MMABC</h1>
        <p className="section-subtitle">
          Góc chia sẻ dành cho phụ huynh: hiểu hơn về toán tư duy, phương pháp
          học hiệu quả và những gợi ý bài tập luyện tập cùng con tại nhà.
        </p>
        <div className="grid grid-2">
          {posts.map((post) => (
            <BlogCard
              key={post.title}
              title={post.title}
              excerpt={post.excerpt}
              tag={post.tag}
              href="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
