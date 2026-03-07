import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toán Tư Duy 11–14 Tuổi | Toán Tư Duy MMABC",
  description:
    "Chương trình toán tư duy cho học sinh 11–14 tuổi tại Trung tâm MMABC. Rèn kỹ năng phân tích đề, giải bài toán nhiều bước và tư duy giải quyết vấn đề.",
  keywords: [
    "toán tư duy 11-14 tuổi",
    "toán tư duy THCS",
    "rèn tư duy giải toán",
    "bài toán nhiều bước",
  ],
};

export default function Age1114Page() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Toán tư duy cho học sinh 11–14 tuổi</h1>
        <p className="section-subtitle">
          Giai đoạn chuyển cấp cần một nền tảng toán học vững chắc và khả năng
          tự học. Chương trình tập trung vào cách phân tích đề, lập kế hoạch
          giải và trình bày lời giải mạch lạc.
        </p>

        <div className="age-layout">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Mục tiêu học tập</div>
              <div className="section-heading">
                Tư duy phân tích và giải quyết vấn đề
              </div>
            </div>
            <ul className="section-list">
              <li>Hiểu sâu bản chất các phép tính và công thức đã học.</li>
              <li>
                Biết phân tích đề, tách bài toán lớn thành các bước nhỏ dễ xử
                lý.
              </li>
              <li>
                Rèn kỹ năng suy luận, chứng minh, giải bài toán nhiều bước.
              </li>
              <li>
                Hình thành thói quen tự kiểm tra lại kết quả và cách làm của
                mình.
              </li>
            </ul>
            <div className="pill-row mt-4">
              <span className="pill-highlight badge-memory">
                Ghi nhớ công thức thông minh
              </span>
              <span className="pill-highlight badge-logic">
                Tư duy phản biện và kiểm tra lời giải
              </span>
            </div>
          </div>

          <div className="age-example">
            <div className="age-example-title">
              Ví dụ bài toán cho học sinh 11–14 tuổi
            </div>
            <div className="age-example-item">
              • Một nhóm học sinh làm 100 bài tập toán. Ngày đầu làm được 35
              bài, ngày thứ hai làm được nhiều hơn ngày đầu 15 bài. Hỏi còn bao
              nhiêu bài chưa làm?
            </div>
            <div className="age-example-item">
              • Một hình chữ nhật có chu vi 60 cm, chiều dài gấp rưỡi chiều
              rộng. Tính diện tích hình chữ nhật.
            </div>
            <div className="age-example-item">
              • Cho dãy số 2, 6, 18, 54, ... Viết tiếp 2 số tiếp theo và giải
              thích cách làm.
            </div>
            <div className="mt-4">
              <p style={{ fontSize: 13 }} className="muted">
                Học sinh có thể tự luyện thêm kỹ năng tính toán với{" "}
                <Link href="/luyen-toan-tu-duy" className="course-card-link">
                  công cụ luyện toán tư duy
                </Link>{" "}
                để tiết kiệm thời gian khi làm bài.
              </p>
            </div>
          </div>
        </div>

        <div className="two-column mt-6">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Phương pháp</div>
              <div className="section-heading">
                Hướng dẫn tự học và tự kiểm tra
              </div>
            </div>
            <ul className="section-list">
              <li>
                Khuyến khích học sinh tự tìm nhiều hướng giải khác nhau cho một
                bài toán.
              </li>
              <li>
                Dạy cách lập kế hoạch giải và ghi chú những bước quan trọng.
              </li>
              <li>
                Luyện kỹ năng trình bày lời giải rõ ràng, chặt chẽ, đúng bố
                cục.
              </li>
              <li>
                Hướng dẫn cách tự xem lại bài, phát hiện và sửa lỗi sai của
                chính mình.
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Chuẩn bị cho tương lai</div>
              <div className="section-heading">
                Nền tảng cho bậc THPT và các môn khoa học
              </div>
            </div>
            <p className="section-description">
              Nền tảng tư duy toán học vững chắc sẽ giúp học sinh tự tin hơn
              không chỉ trong môn Toán mà cả các môn như Vật lý, Hóa học, Tin
              học và các kỳ thi quan trọng.
            </p>
            <Link href="/lien-he" className="btn btn-primary mt-4">
              Đăng ký cho học sinh 11–14 tuổi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
