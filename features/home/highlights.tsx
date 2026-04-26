import { SectionHeading } from "@/components/ui/section-heading";
import { highlightCards } from "@/lib/site";

export function Highlights() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Principles"
        title="Build the first version around clarity, not maximum options."
        description="These are the constraints that keep a personal site easy to maintain while still leaving enough headroom for products, AI, and data."
      />
      <div className="card-grid">
        {highlightCards.map((card) => (
          <article className="card" key={card.title}>
            <p className="card-kicker">{card.kicker}</p>
            <h3>{card.title}</h3>
            <p>{card.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
