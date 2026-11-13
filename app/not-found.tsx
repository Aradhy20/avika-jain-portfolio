import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <span className="not-found-eyebrow">ERROR 404 · PAGE NOT FOUND</span>
        <h1 className="not-found-title">
          Lost in the <em>whitespace.</em>
        </h1>
        <p className="not-found-copy">
          The page you are looking for has been moved, archived, or never existed in this design system.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="button button-dark">
            <Home size={16} /> Return to Portfolio
          </Link>
          <Link href="/#work" className="text-link">
            Explore Selected Projects <ArrowLeft size={14} style={{ transform: "rotate(180deg)" }} />
          </Link>
        </div>
      </div>
    </main>
  );
}

