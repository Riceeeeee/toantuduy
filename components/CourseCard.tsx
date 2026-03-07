import Link from "next/link";

type Props = {
  ageRange: string;
  title: string;
  description: string;
  features: string[];
  href: string;
};

export default function CourseCard({
  ageRange,
  title,
  description,
  features,
  href,
}: Props) {
  return (
    <article className="card course-card">
      <div>
        <div className="pill-row mb-2">
          <span className="pill-highlight badge-age">{ageRange}</span>
        </div>
        <h3 className="course-card-title">{title}</h3>
        <p className="course-card-age">{description}</p>
        <ul className="course-card-list">
          {features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="course-card-footer">
        <div className="course-card-label">Học trực tiếp tại trung tâm</div>
        <Link href={href} className="course-card-link">
          Xem chi tiết →
        </Link>
      </div>
    </article>
  );
}
