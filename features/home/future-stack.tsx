import { SectionHeading } from "@/components/ui/section-heading";
import { futureTrack, systemLayers } from "@/lib/site";

export function FutureStack() {
  return (
    <section className="section">
      <div className="two-column">
        <div>
          <SectionHeading
            eyebrow="Roadmap"
            title="The stack should already know where future complexity belongs."
            description="The point is not to add everything now. The point is to avoid putting future logic in the wrong place."
          />
        </div>
        <div className="future-panel">
          <ul className="future-list">
            {futureTrack.map((item) => (
              <li key={item.title}>
                <p className="card-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-grid" style={{ marginTop: "1.25rem" }}>
        {systemLayers.map((layer) => (
          <article className="card" key={layer.title}>
            <p className="card-kicker">{layer.kicker}</p>
            <h3>{layer.title}</h3>
            <p>{layer.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
