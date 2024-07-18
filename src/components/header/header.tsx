import Link from "next/link";

export function Header() {
  return (
    <header style={{ background: "red" }}>
      <Link href="/">
        <h1>Pokemon Go Tier List</h1>
      </Link>
      <h2>Cabeçalho</h2>
    </header>
  );
}
