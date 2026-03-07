import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới Thiệu Trung Tâm Toán Tư Duy MMABC",
  description:
    "Giới thiệu Trung tâm Toán Tư Duy MMABC tại Thanh Trì, Hà Nội. Phương pháp giảng dạy hiện đại, đội ngũ giáo viên tận tâm, môi trường học thân thiện cho trẻ 4–14 tuổi.",
  keywords: [
    "giới thiệu trung tâm toán tư duy",
    "toán tư duy MMABC",
    "trung tâm toán tư duy thanh trì",
    "giáo viên toán tư duy",
  ],
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Giới thiệu Trung tâm Toán Tư Duy MMABC</h1>
        <p className="section-subtitle">
          Toán Tư Duy MMABC là trung tâm chuyên về toán tư duy cho trẻ từ 4–14
          tuổi tại Thôn 1, Xã Vạn Phúc, Huyện Thanh Trì, Hà Nội. Mục tiêu của
          chúng tôi là giúp trẻ yêu thích môn Toán, phát triển tư duy logic và
          tự tin hơn trong học tập.
        </p>

        <div className="two-column">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Về MMABC</div>
              <div className="section-heading">
                Môi trường học thân thiện, gần gũi với trẻ
              </div>
            </div>
            <ul className="section-list">
              <li>
                Lớp học được thiết kế nhiều màu sắc, góc học tập và góc vui
                chơi xen kẽ.
              </li>
              <li>
                Sĩ số nhỏ, tối đa 10 học sinh/lớp để giáo viên theo sát từng
                bạn.
              </li>
              <li>
                Giáo trình được xây dựng dựa trên chương trình phổ thông kết
                hợp nội dung toán tư duy hiện đại.
              </li>
              <li>
                Luôn coi trọng cảm xúc và trải nghiệm của trẻ trong mỗi buổi
                học.
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Phương pháp giảng dạy</div>
              <div className="section-heading">
                Học qua trải nghiệm, không học vẹt
              </div>
            </div>
            <ul className="section-list">
              <li>Kết hợp câu hỏi gợi mở, trò chơi và tình huống thực tế.</li>
              <li>
                Khuyến khích học sinh tự nêu cách giải, thảo luận cùng bạn và
                bảo vệ ý tưởng của mình.
              </li>
              <li>
                Đánh giá quá trình học của học sinh với nhận xét chi tiết, không
                chỉ dựa trên điểm số.
              </li>
              <li>
                Đồng hành cùng phụ huynh để xây dựng thói quen học tập lành
                mạnh cho con.
              </li>
            </ul>
          </div>
        </div>

        <div className="section mt-6" style={{ paddingTop: 0 }}>
          <div className="two-column">
            <div className="card">
              <div className="section-header">
                <div className="section-eyebrow">Giáo viên</div>
                <div className="section-heading">
                  Đội ngũ giáo viên tận tâm, yêu trẻ
                </div>
              </div>
              <ul className="section-list">
                <li>
                  Giáo viên tốt nghiệp chuyên ngành Sư phạm Toán và các ngành
                  liên quan.
                </li>
                <li>
                  Được đào tạo về phương pháp toán tư duy và tâm lý lứa tuổi.
                </li>
                <li>
                  Luôn quan sát, động viên để từng học sinh đều được tham gia
                  vào bài học.
                </li>
                <li>
                  Trao đổi thường xuyên với phụ huynh về tình hình học tập của
                  con.
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="section-header">
                <div className="section-eyebrow">Giá trị cốt lõi</div>
                <div className="section-heading">
                  Yêu thương – Tôn trọng – Tiến bộ từng ngày
                </div>
              </div>
              <ul className="section-list">
                <li>Đặt sự tự tin và niềm vui học tập của trẻ lên hàng đầu.</li>
                <li>Tôn trọng sự khác biệt về tốc độ và cách học của mỗi bé.</li>
                <li>
                  Khuyến khích trẻ dám thử, dám sai và rút kinh nghiệm từ lỗi
                  sai.
                </li>
                <li>
                  Cùng phụ huynh đồng hành trên hành trình phát triển tư duy của
                  con.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
