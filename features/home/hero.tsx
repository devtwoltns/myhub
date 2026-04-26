import Link from "next/link";
import { heroFacts } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">First version</p>
          <h1 className="hero-title">A personal website that can grow into a product surface.</h1>
          <p className="hero-summary">
            Start as a fast, clear home for your work and notes. Leave room for experiments,
            AI-powered tools, member areas, or database-backed features without rewriting the
            foundation.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/work">
              See work structure
            </Link>
            <Link className="button button-secondary" href="/notes">
              Shape notes
            </Link>
          </div>
        </div>
        <div className="hero-meta">
          {heroFacts.map((item) => (
            <div className="meta-card" key={item.label}>
              <p className="meta-label">{item.label}</p>
              <p className="meta-value">{item.value}</p>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
