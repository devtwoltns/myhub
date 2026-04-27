import { notFound } from "next/navigation";
import {
  learnerPages,
  learners,
  subjects,
  type LearnerSlug,
  type SubjectSlug,
  isLearnerSlug,
  isSubjectSlug,
} from "@/lib/site";

type LearnerPageProps = {
  params: Promise<{
    subject: string;
    learner: string;
  }>;
};

export function generateStaticParams() {
  return subjects.flatMap((subject) =>
    Object.values(learners).map((learner) => ({
      subject: subject.slug,
      learner: learner.slug,
    })),
  );
}

export default async function LearnerPage({ params }: LearnerPageProps) {
  const { subject, learner } = await params;

  if (!isSubjectSlug(subject) || !isLearnerSlug(learner)) {
    notFound();
  }

  const page = learnerPages[subject as SubjectSlug][learner as LearnerSlug];
  const person = learners[learner as LearnerSlug];

  return (
    <section className="page-frame">
      <div className="lesson-card">
        <p className="eyebrow">{person.ageLabel}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>

      <div className="card">
        <p className="card-kicker">Try these first</p>
        <ul className="idea-list">
          {page.ideas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
