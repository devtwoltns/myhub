import Link from "next/link";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">MH</span>
          <span className="brand-copy">
            <span className="brand-title">MyHub</span>
            <span className="brand-subtitle">personal site / build surface</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {navigation.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
