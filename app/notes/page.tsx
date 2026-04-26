import { SectionHeading } from "@/components/ui/section-heading";
import { noteTopics } from "@/lib/site";

export const metadata = {
  title: "Notes | MyHub",
};

export default function NotesPage() {
  return (
    <section className="page-frame">
      <SectionHeading
        eyebrow="Notes"
        title="A place for compact thinking."
        description="Use this area for essays, logs, reading notes, learning trails, or build-in-public posts."
      />
      <div className="stack-list">
        {noteTopics.map((topic) => (
          <article className="stack-item" key={topic.title}>
            <h3>{topic.title}</h3>
            <p>{topic.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
