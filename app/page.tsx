import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";

export const metadata: Metadata = {
  title: "Toán Tư Duy MMABC | Lớp Toán Tư Duy Cho Trẻ 4-14 Tuổi",
  description:
    "Trung tâm Toán Tư Duy MMABC tại Khu đấu giá Đông Mỹ, Xã Nam Phù, Thành phố Hà Nội. Chương trình toán tư duy cho trẻ 4–14 tuổi, tăng tập trung, phát triển tư duy logic và rèn luyện tính nhẩm nhanh.",
  keywords: [
    "toán tư duy",
    "toán tư duy cho bé",
    "toán tư duy MMABC",
    "toán tư duy 4-14 tuổi",
    "trung tâm toán tư duy thanh trì",
    "lớp toán tư duy vạn phúc",
    "toán tư duy thanh trì",
  ],
};

export default function HomePage() {
  return (
    <>
      <div className="home-top-banner">
        <Image
          src="/mmabc-banner-home.jpg"
          alt="Toán tư duy & luyện chữ đẹp MMABC cơ sở Vạn Phúc"
          className="home-top-banner-image"
          width={1440}
          height={240}
          priority
        />
      </div>
      <HeroSection />

      <section className="section">
        <div className="container two-column">
          <div>
            <h2 className="section-title">Toán tư duy là gì?</h2>
            <p className="section-subtitle">
              Toán tư duy không chỉ là làm thật nhiều phép tính. Trọng tâm là
              rèn luyện cho trẻ cách suy nghĩ, phân tích và giải quyết vấn đề
              một cách logic, từ đó tự tin hơn trong học tập và cuộc sống.
            </p>
            <div className="section-list">
              <ul>
                <li>
                  Tập trung vào quá trình suy nghĩ thay vì chỉ kết quả đúng sai.
                </li>
                <li>
                  Kết hợp bài tập số học, hình ảnh, trò chơi và hoạt động nhóm.
                </li>
                <li>
                  Phù hợp cho trẻ từ 4–14 tuổi, chia theo cấp độ và độ tuổi.
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Lợi ích nổi bật</div>
              <div className="section-heading">
                Vì sao phụ huynh chọn Toán Tư Duy MMABC?
              </div>
            </div>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <div>
                  <div className="benefit-title">Tăng khả năng tập trung</div>
                  <div className="muted">
                    Hoạt động học theo trạm, thời lượng ngắn gọn, nhiều trò
                    chơi giúp trẻ tập trung tốt hơn.
                  </div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🧠</div>
                <div>
                  <div className="benefit-title">Phát triển tư duy logic</div>
                  <div className="muted">
                    Bài toán được thiết kế theo cấp độ, hướng dẫn trẻ suy luận,
                    so sánh và liên hệ thực tế.
                  </div>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div>
                  <div className="benefit-title">Rèn luyện tính nhẩm nhanh</div>
                  <div className="muted">
                    Luyện tập nhịp nhàng với bộ công cụ luyện tập của trung tâm
                    giúp phản xạ tính toán nhanh hơn.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 className="section-title">Các khóa học theo độ tuổi</h2>
          <p className="section-subtitle">
            Chương trình được thiết kế riêng cho từng nhóm tuổi, giúp trẻ tiếp
            cận toán học tự nhiên, không áp lực và phù hợp khả năng.
          </p>
          <div className="courses-grid">
            <CourseCard
              ageRange="4–6 tuổi"
              title="Làm quen số và hình"
              description="Khơi gợi hứng thú với những con số, hình khối và mẫu hình đơn giản."
              features={[
                "Nhận biết số, so sánh nhiều – ít",
                "Làm quen cộng trừ trong phạm vi nhỏ",
                "Trò chơi xếp hình, ghép cặp, tìm quy luật",
              ]}
              href="/toan-tu-duy-4-6-tuoi"
            />
            <CourseCard
              ageRange="7–10 tuổi"
              title="Tư duy logic và tính nhẩm"
              description="Củng cố kiến thức trên lớp, phát triển tư duy giải toán và kỹ năng tính nhẩm."
              features={[
                "Cộng trừ nhân chia linh hoạt",
                "Bài toán suy luận, tìm quy luật",
                "Kỹ thuật tính nhẩm nhanh, mẹo ghi nhớ",
              ]}
              href="/toan-tu-duy-7-10-tuoi"
            />
            <CourseCard
              ageRange="11–14 tuổi"
              title="Tư duy giải quyết vấn đề"
              description="Chuẩn bị nền tảng vững vàng cho bậc THCS, THPT với tư duy phân tích."
              features={[
                "Bài toán nhiều bước, phân tích dữ kiện",
                "Ứng dụng toán vào tình huống thực tế",
                "Rèn kỹ năng trình bày lời giải khoa học",
              ]}
              href="/toan-tu-duy-11-14-tuoi"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-top">
              <div className="pill-row">
                <span className="pill-highlight">Tăng tập trung</span>
                <span className="pill-highlight">Tính nhẩm nhanh</span>
              </div>
              <div className="cta-top-right">
                <span className="cta-level">Mức độ: Dễ · Trung bình</span>
                <span className="hero-badge">
                  <span className="hero-badge-dot" />
                  15 phút luyện mỗi ngày
                </span>
              </div>
            </div>
            <div className="cta-box-layout">
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>
                  Đăng ký học thử Toán Tư Duy MMABC cho con ngay hôm nay
                </h2>
                <p style={{ margin: 0, maxWidth: 520 }}>
                  Đội ngũ giáo viên tận tâm, giáo trình dễ hiểu, môi trường học vui
                  nhộn giúp trẻ yêu thích môn Toán, không còn sợ sai và sẵn sàng
                  thử thách bản thân.
                </p>
              </div>
              <div>
                <div className="cta-right-note" style={{ marginBottom: 12 }}>
                  Trải nghiệm ngay công cụ luyện toán tư duy online của MMABC.
                </div>
                <Link href="/luyen-toan-tu-duy" className="btn hero-cta">
                  Luyện toán ngay
                </Link>
              </div>
            </div>
            <div className="cta-bottom">
              <div className="cta-box-row">
                <span className="cta-badge">Học thử miễn phí 1 buổi</span>
                <span className="cta-badge">Sĩ số nhỏ · Tối đa 10 bé/lớp</span>
              </div>
              <div className="cta-actions">
                <Link href="/lien-he" className="btn btn-primary">
                  Đăng ký lịch học thử
                </Link>
                <Link href="/khoa-hoc-toan-tu-duy" className="btn btn-outline">
                  Tìm hiểu chi tiết chương trình
                </Link>
              </div>
              <div className="cta-bottom-right">
                <div className="pill-row">
                  <span className="pill-highlight">100% vui học</span>
                  <span className="pill-highlight">Tự tin môn Toán</span>
                </div>
                <div className="cta-brand">MMABC</div>
              </div>
            </div>
            <div className="local-highlight">
              Địa chỉ trung tâm:{" "}
              <span>
                Khu đấu giá Đông Mỹ, Xã Nam Phù, Thành phố Hà Nội
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
