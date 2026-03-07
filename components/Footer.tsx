import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="mb-2">
            © {new Date().getFullYear()} Toán Tư Duy MMABC.
          </div>
          <div>
            Thôn 1, Xã Vạn Phúc, Huyện Thanh Trì, Hà Nội · Điện thoại:{" "}
            <a href="tel:0912345678">0912 345 678</a>
          </div>
        </div>
        <div className="footer-links">
          <span className="footer-tag">Toán tư duy 4–14 tuổi</span>
          <span className="footer-tag">Tăng tập trung</span>
          <span className="footer-tag">Tính nhẩm nhanh</span>
          <Link href="/toan-tu-duy-thanh-tri" className="footer-tag">
            Toán tư duy Thanh Trì
          </Link>
        </div>
      </div>
    </footer>
  );
}
