"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="navbar-brand">
          <div className="navbar-logo">
            <div className="navbar-logo-inner">M</div>
          </div>
          <div className="navbar-title">
            <span className="navbar-title-main">Toán Tư Duy</span>
            <span className="navbar-title-sub">MMABC · Thanh Trì, Hà Nội</span>
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
