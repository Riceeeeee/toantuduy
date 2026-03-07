import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ Trung Tâm Toán Tư Duy MMABC",
  description:
    "Liên hệ Trung tâm Toán Tư Duy MMABC tại Khu đấu giá Đông Mỹ, Xã Nam Phù, Thành phố Hà Nội. Đăng ký học thử toán tư duy cho trẻ 4–14 tuổi.",
  keywords: [
    "liên hệ toán tư duy",
    "đăng ký học toán tư duy",
    "toán tư duy thanh trì",
    "toán tư duy MMABC",
  ],
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Liên hệ Toán Tư Duy MMABC</h1>
        <p className="section-subtitle">
          Vui lòng để lại thông tin, Trung tâm Toán Tư Duy MMABC sẽ liên hệ tư
          vấn lộ trình và sắp xếp lịch học thử phù hợp cho con.
        </p>

        <div className="contact-grid">
          <div className="card">
            <div className="section-header">
              <div className="section-eyebrow">Thông tin liên hệ</div>
              <div className="section-heading">
                Địa chỉ và số điện thoại trung tâm
              </div>
            </div>
            <div className="info-list mb-4">
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
                <div className="info-item-label">Email</div>
                <div>mmabc.toantuduy@gmail.com</div>
              </div>
            </div>

            <form className="contact-form">
              <div>
                <label className="field-label" htmlFor="parentName">
                  Họ tên phụ huynh
                </label>
                <input
                  id="parentName"
                  name="parentName"
                  className="field-input"
                  placeholder="Nhập họ tên"
                  required
                />
              </div>
              <div>
                <label className="field-label" htmlFor="phone">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="field-input"
                  placeholder="Nhập số điện thoại liên hệ"
                  required
                />
              </div>
              <div>
                <label className="field-label" htmlFor="childAge">
                  Độ tuổi của bé
                </label>
                <input
                  id="childAge"
                  name="childAge"
                  className="field-input"
                  placeholder="Ví dụ: 5 tuổi, lớp 2, lớp 6..."
                />
              </div>
              <div>
                <label className="field-label" htmlFor="message">
                  Nội dung cần tư vấn
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="field-textarea"
                  placeholder="Chia sẻ thêm về tình hình học toán hiện tại của con"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Gửi đăng ký
              </button>
              <p className="muted" style={{ fontSize: 12 }}>
                Sau khi nhận được thông tin, MMABC sẽ liên hệ lại qua điện thoại
                hoặc Zalo trong vòng 24 giờ.
              </p>
            </form>
          </div>

          <div className="map-placeholder">
            <iframe
              title="Bản đồ Trung tâm Toán Tư Duy MMABC"
              src="https://www.google.com/maps?q=Khu+đấu+giá+Đông+Mỹ,+xã+Nam+Phù,+Thành+phố+Hà+Nội&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, width: "100%", height: "100%", borderRadius: 16 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
