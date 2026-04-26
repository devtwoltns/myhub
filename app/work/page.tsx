import { SectionHeading } from "@/components/ui/section-heading";
import { workCards } from "@/lib/site";

export const metadata = {
  title: "Work | MyHub",
};

export default function WorkPage() {
  return (
    <section className="page-frame">
      <SectionHeading
        eyebrow="Work"
        title="Projects deserve structure before they deserve scale."
        description="This section is ready for case studies, experiments, product writeups, and shipped work."
      />
      <div className="card-grid">
        {workCards.map((item) => (
          <article className="card" key={item.title}>
            <p className="card-kicker">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
