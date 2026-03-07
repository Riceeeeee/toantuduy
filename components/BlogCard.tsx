import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
};

export default function BlogCard({ title, excerpt, tag, href }: Props) {
  return (
    <article className="card blog-card">
      <div className="pill-row">
        <span className="pill-highlight">{tag}</span>
      </div>
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-excerpt">{excerpt}</p>
      <div className="blog-card-meta">
        <span>Bài viết dành cho phụ huynh</span>
        <Link href={href} className="course-card-link">
          Xem bài viết →
        </Link>
      </div>
    </article>
  );
}
