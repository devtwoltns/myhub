import Link from "next/link";
import { learners, subjects } from "@/lib/site";

export default function HomePage() {
  return (
    <section className="page-frame">
      <div className="learning-hero">
        <div className="learning-hero-copy">
          <div className="hero-sparkles" aria-hidden="true">
            <span className="sparkle-badge">Clouds</span>
            <span className="sparkle-badge">Stars</span>
            <span className="sparkle-badge">Questions</span>
          </div>
          <h1 className="hero-title">Hi Ellie and Eva!</h1>
          <p className="hero-summary">Pick an adventure and let&apos;s explore together.</p>
        </div>
      </div>

      <div className="subject-grid">
        {subjects.map((subject) => (
          <article className={`subject-card ${subject.splashClass}`} key={subject.slug}>
            <div className="subject-icon" aria-hidden="true">
              {subject.icon}
            </div>
            <p className="card-kicker">{subject.eyebrow}</p>
            <h2>{subject.title}</h2>
            <p>{subject.summary}</p>
            <div className="learner-links">
              <Link className="button button-primary" href={`/${subject.slug}/${learners.ellie.slug}`}>
                Ellie, age 8
              </Link>
              <Link className="button button-secondary" href={`/${subject.slug}/${learners.eva.slug}`}>
                Eva, age 4
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
