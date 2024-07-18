"use client";
import { useState, useEffect, memo } from "react";
import Link from "next/link";
import Image from "next/image";

interface PokeProps {
  name: string;
  poke_api: string;
}

export const PokeCell = memo(function PokeCell({ name, poke_api }: PokeProps) {
  const imageDescription = `Imagem do Pokemon ${name}`;
  const [imageSrc, setImageSrc] = useState<string>("/whoIsThatPokemon.png");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(poke_api);
        const data = await response.json();
        setImageSrc(data.sprites.other["official-artwork"].front_default);
      } catch (error) {
        console.error("Erro ao buscar a imagem:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [poke_api]);

  return (
    <Link href="/">
      <div>
        {loading ? (
          <Image
            src="/loading.gif"
            alt="Carregando"
            width={128}
            height={128}
            unoptimized
          />
        ) : (
          <Image
            src={imageSrc}
            title={imageDescription}
            alt={imageDescription}
            width={128}
            height={128}
          />
        )}
        <h3>{name}</h3>
      </div>
    </Link>
  );
});
