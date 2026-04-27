import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">E&amp;E</span>
          <span className="brand-copy">
            <span className="brand-title">Ellie and Eva&apos;s Sky Club</span>
            <span className="brand-subtitle">blue adventures and bright ideas</span>
          </span>
        </Link>
      </div>
    </header>
  );
}
