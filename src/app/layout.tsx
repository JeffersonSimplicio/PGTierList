import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";

const PS2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Tier List Pokemon Go",
  description: "Lista os melhores Pokemons de cada tipo no Pokemon Go",
};

interface IRootLayout extends Readonly<{ children: React.ReactNode }> {}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-br">
      <body className={`${PS2P.className} overflow-x-hidden`}>
        <Header />
        <main className="p-4 max-w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
