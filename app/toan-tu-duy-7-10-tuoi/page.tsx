import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toán Tư Duy 7–10 Tuổi | Toán Tư Duy MMABC",
  description:
    "Khóa học toán tư duy cho học sinh tiểu học 7–10 tuổi tại Trung tâm MMABC. Luyện cộng trừ nhân chia, tư duy logic và kỹ năng giải toán có lời văn.",
  keywords: [
    "toán tư duy 7-10 tuổi",
    "toán tư duy tiểu học",
    "luyện tính nhẩm",
    "bài toán tư duy cho học sinh lớp 2 3 4",
  ],
};

export default function Age710Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Toán tư duy cho học sinh 7–10 tuổi</h1>
        <p className="section-subtitle">
          Giai đoạn tiểu học là lúc trẻ cần được củng cố nền tảng cộng trừ nhân
          chia và biết áp dụng vào bài toán thực tế. Chương trình giúp trẻ tự
          tin và yêu thích môn Toán hơn.
        </p>

        <div className="age-layout">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Mục tiêu học tập</div>
              <div className="section-heading">
                Củng cố kiến thức và rèn tư duy logic
              </div>
            </div>
            <ul className="section-list">
              <li>
                Thành thạo cộng trừ nhân chia trong phạm vi chương trình tiểu
                học.
              </li>
              <li>Luyện tính nhẩm nhanh, hạn chế phụ thuộc vào máy tính.</li>
              <li>
                Hiểu đề toán có lời văn, biết phân tích dữ kiện quan trọng.
              </li>
              <li>
                Rèn khả năng suy luận, tìm quy luật và giải bài toán nhiều
                bước.
              </li>
            </ul>
            <div className="pill-row mt-4">
              <span className="pill-highlight badge-skill">
                Kỹ năng giải toán có lời văn
              </span>
              <span className="pill-highlight badge-logic">
                Tư duy logic và suy luận
              </span>
            </div>
          </div>

          <div className="age-example">
            <div className="age-example-title">
              Ví dụ bài toán cho học sinh 7–10 tuổi
            </div>
            <div className="age-example-item">
              • Một cửa hàng có 36 chiếc bút. Người bán đã bán được 15 chiếc.
              Hỏi cửa hàng còn lại bao nhiêu chiếc bút?
            </div>
            <div className="age-example-item">
              • Một bạn đi bộ từ nhà đến trường hết 12 phút, bạn thứ hai đi hết
              9 phút. Hỏi tổng thời gian hai bạn đi bộ là bao nhiêu phút?
            </div>
            <div className="age-example-item">
              • Điền số thích hợp vào dãy: 3, 6, 9, 12, ..., 18.
            </div>
            <div className="mt-4">
              <p style={{ fontSize: 13 }} className="muted">
                Bé có thể luyện thêm với công cụ{" "}
                <Link href="/luyen-toan-tu-duy" className="course-card-link">
                  luyện toán tư duy online
                </Link>{" "}
                để tăng tốc độ tính nhẩm.
              </p>
            </div>
          </div>
        </div>

        <div className="two-column mt-6">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Phương pháp</div>
              <div className="section-heading">
                Kết hợp lý thuyết và thực hành
              </div>
            </div>
            <ul className="section-list">
              <li>Ôn lại kiến thức trọng tâm trong sách giáo khoa.</li>
              <li>
                Bổ sung bài tập tư duy, bài toán mở rộng để phát triển khả năng
                suy nghĩ độc lập.
              </li>
              <li>
                Áp dụng kỹ thuật chia nhỏ bài toán, vẽ sơ đồ, gạch chân dữ
                kiện.
              </li>
              <li>
                Giáo viên luôn khuyến khích nhiều cách giải khác nhau cho cùng
                một bài toán.
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Đăng ký khóa học</div>
              <div className="section-heading">
                Đồng hành cùng con trong những năm tiểu học
              </div>
            </div>
            <p className="section-description">
              Phụ huynh có thể liên hệ để được tư vấn lộ trình phù hợp với năng
              lực hiện tại của con, từ cơ bản đến nâng cao.
            </p>
            <Link href="/lien-he" className="btn btn-primary mt-4">
              Đăng ký cho con 7–10 tuổi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
