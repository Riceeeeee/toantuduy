import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toán Tư Duy Thanh Trì | Trung Tâm Toán Tư Duy MMABC",
  description:
    "Trung tâm toán tư duy Thanh Trì MMABC tại Khu đấu giá Đông Mỹ, Xã Nam Phù, Thành phố Hà Nội. Lớp toán tư duy cho trẻ 4–14 tuổi, thuận tiện cho phụ huynh khu vực phía Nam Hà Nội.",
  keywords: [
    "toán tư duy thanh trì",
    "trung tâm toán tư duy thanh trì",
    "lớp toán tư duy tại thanh trì",
    "toán tư duy vạn phúc",
  ],
};

export default function ThanhTriPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Toán tư duy Thanh Trì MMABC</h1>
        <p className="section-subtitle">
          Nếu phụ huynh đang tìm kiếm lớp toán tư duy tại Thanh Trì cho con từ
          4–14 tuổi, Toán Tư Duy MMABC là lựa chọn phù hợp, thuận tiện di
          chuyển và môi trường học thân thiện cho trẻ.
        </p>

        <div className="two-column">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Địa chỉ trung tâm</div>
              <div className="section-heading">
                Thuận tiện cho phụ huynh khu vực Thanh Trì
              </div>
            </div>
            <div className="info-list">
              <div>
                <div className="info-item-label">Địa chỉ</div>
                <div>
                  Khu đấu giá Đông Mỹ, Xã Nam Phù, Thành phố Hà Nội
                </div>
              </div>
              <div>
                <div className="info-item-label">Số điện thoại</div>
                <div>
                  <a href="tel:0825797789">0825 797 789</a>
                </div>
              </div>
              <div>
                <div className="info-item-label">Thời gian hoạt động</div>
                <div className="muted">
                  Thứ 2 – Thứ 6: 17:30 – 21:00 · Thứ 7, Chủ nhật: 8:00 – 11:30;
                  14:00 – 17:30
                </div>
              </div>
            </div>
            <div className="mt-4 local-highlight">
              Từ khóa gợi ý: <span>toán tư duy Thanh Trì</span>,{" "}
              <span>lớp toán tư duy cho trẻ tại Thanh Trì</span>,{" "}
              <span>toán tư duy Vạn Phúc</span>.
            </div>
          </div>

          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Lợi ích học tại địa phương</div>
              <div className="section-heading">
                An toàn, tiết kiệm thời gian cho gia đình
              </div>
            </div>
            <ul className="section-list">
              <li>
                Phụ huynh tại khu vực Thanh Trì, Vạn Phúc không cần đưa con đi
                xa trung tâm thành phố.
              </li>
              <li>
                Thời gian học linh hoạt, phù hợp với lịch học trên trường của
                học sinh.
              </li>
              <li>
                Môi trường học gần nhà, bạn bè cùng khu vực giúp trẻ nhanh hòa
                nhập.
              </li>
              <li>
                Phụ huynh dễ dàng trao đổi trực tiếp với giáo viên sau mỗi buổi
                học.
              </li>
            </ul>
          </div>
        </div>

        <div className="section mt-6" style={{ paddingTop: 0 }}>
          <div className="contact-grid">
            <div className="card">
              <div className="section-header">
                <div className="section-eyebrow">Thông tin liên hệ</div>
                <div className="section-heading">
                  Đăng ký học thử toán tư duy Thanh Trì
                </div>
              </div>
              <p className="section-description">
                Phụ huynh có thể liên hệ trực tiếp qua số điện thoại hoặc đăng
                ký form để được tư vấn lộ trình học phù hợp cho con.
              </p>
              <div className="info-list mt-4">
                <div>
                  <div className="info-item-label">Điện thoại</div>
                  <div>
                    <a href="tel:0825797789">0825 797 789</a>
                  </div>
                </div>
                <div>
                  <div className="info-item-label">Zalo</div>
                  <div className="muted">
                    Kết nối Zalo với số{" "}
                    <a href="tel:0825797789">0825 797 789</a> để được tư vấn
                    nhanh.
                  </div>
                </div>
                <div>
                  <div className="info-item-label">Đăng ký online</div>
                  <div className="muted">
                    Điền thông tin tại trang{" "}
                    <Link href="/lien-he" className="course-card-link">
                      Liên hệ
                    </Link>{" "}
                    để nhận lịch học thử phù hợp.
                  </div>
                </div>
              </div>
            </div>
            <div className="map-placeholder">
              <iframe
                title="Bản đồ Toán Tư Duy MMABC Thanh Trì"
                src="https://www.google.com/maps?q=Khu+đấu+giá+Đông+Mỹ,+xã+Nam+Phù,+Thành+phố+Hà+Nội&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 16,
                }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
