import Link from "next/link";
import { notFound } from "next/navigation";
import { learners, subjectPages, subjects, type SubjectSlug, isSubjectSlug } from "@/lib/site";

type SubjectPageProps = {
  params: Promise<{
    subject: string;
  }>;
};

export function generateStaticParams() {
  return subjects.map((subject) => ({ subject: subject.slug }));
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subject } = await params;

  if (!isSubjectSlug(subject)) {
    notFound();
  }

  const page = subjectPages[subject as SubjectSlug];

  return (
    <section className="page-frame">
      <div className="lesson-card">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.summary}</p>
      </div>

      <div className="learner-grid">
        <article className="card">
          <p className="card-kicker">{learners.ellie.ageLabel}</p>
          <h3>{learners.ellie.name}</h3>
          <p>{learners.ellie.summary}</p>
          <Link className="button button-primary" href={`/${subject}/${learners.ellie.slug}`}>
            Go to Ellie&apos;s path
          </Link>
        </article>
        <article className="card">
          <p className="card-kicker">{learners.eva.ageLabel}</p>
          <h3>{learners.eva.name}</h3>
          <p>{learners.eva.summary}</p>
          <Link className="button button-secondary" href={`/${subject}/${learners.eva.slug}`}>
            Go to Eva&apos;s path
          </Link>
        </article>
      </div>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="card">
          <p className="card-kicker">What this adventure feels like</p>
          <ul className="idea-list">
            {page.focusPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
