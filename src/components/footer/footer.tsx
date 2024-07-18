import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "blue" }}>
      <Link href="/">
        <h4>Rodapé</h4>
      </Link>
    </footer>
  );
}
