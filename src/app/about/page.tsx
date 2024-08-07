// import Image from "next/image";
import Link from "next/link";
import "./about.css";

export default function About() {
  // const AUTHOR_IMAGE = "";

  const LINK_REPO = "https://github.com/JeffersonSimplicio/pg_types_tierlist";

  return (
    <main className="main-about">
      <h1 className="title-page">Sobre Nós</h1>
      {/* <Image
        src={AUTHOR_IMAGE}
        alt="Foto de Jefferson da Silva Simplício. Desenvolvedor responsável por criar a página."
        width={400} //500
        height={240} //300
        className="rounded-lg mb-4"
      /> */}
      <p className="paragraph-text mb-4">
        Bem-vindo ao Pokémon Go Tier List! Este site é dedicado a fornecer
        informações precisas e atualizadas sobre os melhores Pokémon para
        batalhas PvE no Pokémon Go. Aqui, você encontrará listas de níveis
        organizadas e as melhores combinações de golpes para cada Pokémon.
      </p>
      <p className="paragraph-text mb-4">
        Seja você um jogador novato ou experiente, casual ou dedicado, nosso
        site tem algo para todos. Nossa equipe de fãs apaixonados está sempre
        trabalhando para melhorar esse projeto, corrigir problemas e trazer novos
        recursos para ajudar você a aproveitar ainda mais o jogo.
      </p>
      <p className="paragraph-text">
        Este é um projeto de código aberto, e você pode encontrar nosso{" "}
        <Link
          href={LINK_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary"
        >
          <span>repositório no GitHub</span>
        </Link>
        . Estamos felizes com a sua visita e esperamos que você considere nosso conteúdo útil e interessante!
      </p>
    </main>
  );
}
