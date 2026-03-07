import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toán Tư Duy 4–6 Tuổi | Toán Tư Duy MMABC",
  description:
    "Chương trình toán tư duy cho bé 4–6 tuổi tại Trung tâm MMABC. Giúp bé làm quen với số và hình, rèn tập trung và hứng thú với môn Toán.",
  keywords: [
    "toán tư duy 4-6 tuổi",
    "toán tư duy cho bé 5 tuổi",
    "lớp toán tư duy mầm non",
    "toán tư duy MMABC",
  ],
};

export default function Age46Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Toán tư duy cho bé 4–6 tuổi</h1>
        <p className="section-subtitle">
          Giai đoạn vàng để bé làm quen với những con số và hình khối. Chương
          trình được thiết kế như một giờ chơi có hướng dẫn, giúp bé vui học
          mà không áp lực.
        </p>

        <div className="age-layout">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Mục tiêu học tập</div>
              <div className="section-heading">Bé làm quen với số và hình</div>
            </div>
            <ul className="section-list">
              <li>Nhận biết, đọc và viết được các số đơn giản.</li>
              <li>Hiểu khái niệm nhiều – ít, lớn – bé, dài – ngắn.</li>
              <li>Làm quen cộng trừ trong phạm vi nhỏ qua hình ảnh.</li>
              <li>Phát triển khả năng quan sát và ghi nhớ ngắn hạn.</li>
            </ul>
            <div className="chip-row mt-4">
              <span className="chip">Bé tập đếm đồ vật xung quanh</span>
              <span className="chip">Ghép cặp số với hình ảnh</span>
              <span className="chip">Tô màu, nối hình, xếp khối</span>
            </div>
          </div>

          <div className="age-example">
            <div className="age-example-title">Ví dụ bài toán cho bé 4–6 tuổi</div>
            <div className="age-example-item">
              • Trên bàn có 3 quả táo, mẹ đặt thêm 2 quả nữa. Hỏi trên bàn có
              tất cả bao nhiêu quả táo?
            </div>
            <div className="age-example-item">
              • Bé nối các cặp hình giống nhau và đếm xem có bao nhiêu cặp.
            </div>
            <div className="age-example-item">
              • Bé tô màu tất cả các hình có 4 cạnh, không tô các hình khác.
            </div>
            <div className="mt-4">
              <p style={{ fontSize: 13 }} className="muted">
                Phụ huynh có thể cho bé luyện thêm tại nhà với công cụ{" "}
                <Link href="/luyen-toan-tu-duy" className="course-card-link">
                  Luyện toán tư duy online
                </Link>{" "}
                của MMABC.
              </p>
            </div>
          </div>
        </div>

        <div className="two-column mt-6">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Phương pháp</div>
              <div className="section-heading">
                Học qua trò chơi và hoạt động nhóm
              </div>
            </div>
            <ul className="section-list">
              <li>Sử dụng thẻ số, que tính, khối gỗ, hình dán màu sắc.</li>
              <li>Trò chơi xếp hình, ghép cặp, tìm điểm giống và khác nhau.</li>
              <li>Hoạt động theo nhóm nhỏ để bé làm việc cùng bạn.</li>
              <li>Khích lệ bé nói lại cách làm, không chê bai khi bé trả lời sai.</li>
            </ul>
          </div>
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Đăng ký cho bé</div>
              <div className="section-heading">
                Học thử miễn phí 1 buổi tại trung tâm
              </div>
            </div>
            <p className="section-description">
              Phụ huynh có thể đăng ký để bé tham gia một buổi học thử, làm
              quen với cô giáo và bạn bè trước khi quyết định tham gia khóa
              học.
            </p>
            <Link href="/lien-he" className="btn btn-primary mt-4">
              Đăng ký học thử cho bé 4–6 tuổi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
