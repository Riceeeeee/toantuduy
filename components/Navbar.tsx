"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/khoa-hoc-toan-tu-duy", label: "Khóa học" },
  { href: "/luyen-toan-tu-duy", label: "Luyện tập" },
  { href: "/blog", label: "Blog" },
  { href: "/toan-tu-duy-thanh-tri", label: "Toán tư duy Thanh Trì" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTheme =
      (window.localStorage.getItem("mmabc-theme") as "light" | "dark" | null) ??
      "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("mmabc-theme", theme);
  }, [theme]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-brand">
          <div className="navbar-logo">
            <div className="navbar-logo-inner">M</div>
          </div>
          <div className="navbar-title">
            <span className="navbar-title-main">Toán Tư Duy MMABC</span>
            <span className="navbar-title-sub">
              Thanh Trì, Hà Nội · 4–14 tuổi
            </span>
          </div>
        </Link>

        <nav
          className={`navbar-links ${
            menuOpen ? "open" : ""
          }`}
        >
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link ${
                  isActive ? "navbar-link-active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            aria-label="Chuyển chế độ sáng/tối"
            className="theme-toggle"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            <div
              className={`theme-toggle-thumb ${
                theme === "dark" ? "dark" : ""
              }`}
            />
          </button>
          <Link href="/lien-he" className="btn btn-primary">
            Đăng ký học thử
          </Link>
          <button
            type="button"
            className="navbar-toggle"
            aria-label="Mở menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
