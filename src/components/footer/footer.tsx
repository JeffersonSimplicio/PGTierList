import Link from "next/link";
import "./footer.css";

export function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-conteiner">
        <p className="mb-2">
          © 2024 Pokemon Go Tier List. Licensed under the{" "}
          <Link
            href="https://www.gnu.org/licenses/gpl-3.0.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline"
          >
            GNU General Public License v3.0
          </Link>
          .
        </p>
        <nav className="nav-footer">
          <Link href="/about" className="text-secondary underline">
            About
          </Link>
          <Link href="/contact" className="text-secondary underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
