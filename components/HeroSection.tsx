import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="badge">
            <span className="badge-dot" />
            Trung tâm Toán Tư Duy cho trẻ 4–14 tuổi tại Thanh Trì
          </div>
          <h1 className="hero-title mt-4">
            Toán Tư Duy{" "}
            <span className="hero-highlight">MMABC</span>
          </h1>
          <p className="hero-subtitle">
            Giúp con xây nền tảng tư duy vững chắc, tự tin với những con số,
            tăng khả năng tập trung và rèn luyện tính nhẩm nhanh mỗi ngày.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">4–14</div>
              <div className="hero-stat-label">Độ tuổi phù hợp</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">3+</div>
              <div className="hero-stat-label">Cấp độ chương trình</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">60&apos;</div>
              <div className="hero-stat-label">Thời lượng mỗi buổi học</div>
            </div>
          </div>
          <div className="hero-actions">
            <Link href="/lien-he" className="btn btn-primary">
              Đăng ký học thử miễn phí
            </Link>
            <Link href="/khoa-hoc-toan-tu-duy" className="btn btn-outline">
              Xem chương trình học
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-card">
            <div className="hero-shape">
              <div className="hero-shape-circle small" />
              <div className="hero-shape-circle large" />
            </div>
            <div className="hero-card-header">
              <div>
                <div className="hero-card-title">Bài toán tư duy cho bé</div>
                <div className="muted hero-card-subtitle">
                  Cộng trừ, nhân chia, so sánh, suy luận hình ảnh
                </div>
              </div>
              <div className="hero-card-level">Mức độ: Dễ · Trung bình</div>
            </div>
            <div className="hero-card-grid">
              <div>
                <div className="pill-row mb-2">
                  <span className="pill-highlight">Tăng tập trung</span>
                  <span className="pill-highlight">Tính nhẩm nhanh</span>
                </div>
                <div className="muted hero-card-text">
                  Giáo viên hướng dẫn từng bước, khuyến khích trẻ tự suy nghĩ
                  và tìm lời giải.
                </div>
              </div>
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-dot" />
                  15 phút luyện mỗi ngày
                </div>
                <div className="mt-4 hero-card-text">
                  Trải nghiệm ngay công cụ luyện toán tư duy online của MMABC.
                </div>
                <div className="mt-4">
                  <Link href="/luyen-toan-tu-duy" className="btn hero-cta">
                    Luyện toán ngay
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-floating-card">
              <span className="hero-floating-pill">100% vui học</span>
              <span>Tự tin trước môn Toán</span>
            </div>
            <div className="hero-decoration">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
