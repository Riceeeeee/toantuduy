import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Khóa Học Toán Tư Duy | Toán Tư Duy MMABC",
  description:
    "Khóa học toán tư duy tại Trung tâm MMABC dành cho trẻ 4–14 tuổi. Chương trình rõ ràng, phương pháp trực quan, giúp trẻ yêu thích và học tốt môn Toán.",
  keywords: [
    "khóa học toán tư duy",
    "chương trình toán tư duy",
    "toán tư duy MMABC",
    "toán tư duy cho bé",
    "trung tâm toán tư duy",
  ],
};

export default function CoursePage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Khóa học Toán Tư Duy MMABC</h1>
        <p className="section-subtitle">
          Chương trình được xây dựng theo lộ trình rõ ràng, chia theo độ tuổi
          và cấp độ, giúp trẻ yêu thích môn Toán, tự tin với những con số và
          hình thành thói quen suy nghĩ logic.
        </p>

        <div className="two-column">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Chương trình học</div>
              <div className="section-heading">
                Lộ trình học phù hợp từng độ tuổi
              </div>
            </div>
            <ul className="section-list">
              <li>
                <strong>4–6 tuổi:</strong> Làm quen số, hình, so sánh nhiều –
                ít, các phép cộng trừ đơn giản qua hình ảnh và trò chơi.
              </li>
              <li>
                <strong>7–10 tuổi:</strong> Củng cố cộng trừ nhân chia, luyện
                tính nhẩm, bài toán tìm quy luật, so sánh, suy luận.
              </li>
              <li>
                <strong>11–14 tuổi:</strong> Bài toán nhiều bước, phân tích
                dữ kiện, ứng dụng toán vào thực tế, rèn cách trình bày khoa
                học.
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/toan-tu-duy-4-6-tuoi" className="course-card-link">
                Toán tư duy 4–6 tuổi →
              </Link>
              <span className="mx-2" style={{ margin: "0 8px" }} />
              <Link href="/toan-tu-duy-7-10-tuoi" className="course-card-link">
                Toán tư duy 7–10 tuổi →
              </Link>
              <span className="mx-2" style={{ margin: "0 8px" }} />
              <Link
                href="/toan-tu-duy-11-14-tuoi"
                className="course-card-link"
              >
                Toán tư duy 11–14 tuổi →
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Phương pháp giảng dạy</div>
              <div className="section-heading">
                Học qua trải nghiệm và trò chơi
              </div>
            </div>
            <ul className="section-list">
              <li>
                Kết hợp giáo cụ trực quan, thẻ số, hình khối, trò chơi vận động
                để trẻ dễ hình dung.
              </li>
              <li>
                Sĩ số lớp nhỏ, giáo viên có thể quan sát và hỗ trợ từng bé.
              </li>
              <li>
                Khuyến khích trẻ trình bày lại cách làm, tập thói quen diễn đạt
                suy nghĩ bằng lời.
              </li>
              <li>
                Kết nối với phụ huynh sau mỗi buổi học, báo cáo tiến độ và gợi
                ý bài tập về nhà.
              </li>
            </ul>
          </div>
        </div>

        <div className="section mt-6" style={{ paddingTop: 0 }}>
          <div className="two-column">
            <div className="card">
              <div className="section-header">
                <div className="section-eyebrow">Lợi ích của toán tư duy</div>
                <div className="section-heading">
                  Hơn cả điểm số trên lớp học
                </div>
              </div>
              <ul className="section-list">
                <li>Tăng khả năng tập trung, ghi nhớ và xử lý thông tin.</li>
                <li>Rèn tư duy logic, suy luận và khả năng giải quyết vấn đề.</li>
                <li>Hình thành thái độ tích cực với môn Toán, không còn sợ sai.</li>
                <li>
                  Hỗ trợ tốt cho các môn học khác như Khoa học, Vật lý, Tin học.
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="section-header">
                <div className="section-eyebrow">Đối tượng học</div>
                <div className="section-heading">
                  Phù hợp cho trẻ từ 4–14 tuổi
                </div>
              </div>
              <ul className="section-list">
                <li>
                  Trẻ muốn làm quen với các con số ngay từ mầm non, lớp 1.
                </li>
                <li>
                  Trẻ mất gốc hoặc chưa tự tin với môn Toán, cần lộ trình học
                  lại từ điều cơ bản.
                </li>
                <li>
                  Trẻ khá giỏi, muốn rèn luyện thêm tư duy và khả năng giải
                  quyết vấn đề.
                </li>
                <li>
                  Phụ huynh mong con có thói quen học tập chủ động, không học
                  đối phó.
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/lien-he" className="btn btn-primary">
                  Tư vấn chọn lộ trình cho con
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
