"use client";
import { useState, useEffect, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import "./pokeCell.css";

interface PokeProps {
  name: string;
  poke_api: string;
  tier: string;
}

export const PokeCell = memo(function PokeCell({
  name,
  poke_api,
  tier,
}: PokeProps) {
  const imageDescription = `Imagem do Pokémon ${name}`;
  const [imageSrc, setImageSrc] = useState<string>("/whoIsThatPokemon.png");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(poke_api);
        const data = await response.json();
        setImageSrc(data.sprites.other["official-artwork"].front_default);
      } catch (error) {
        // console.error("Erro ao buscar a imagem:", error);
        // It's not the best solution, but it should work for now.
        switch (name) {
          case "Genesect (Chill Drive)":
            setImageSrc(
              "https://archives.bulbagarden.net/media/upload/3/38/HOME0649W.png"
            );
            break;
          case "Genesect (Burn Drive)":
            setImageSrc(
              "https://archives.bulbagarden.net/media/upload/a/aa/HOME0649R.png"
            );
            break;
          case "Genesect (Douse Drive)":
            setImageSrc(
              "https://archives.bulbagarden.net/media/upload/4/44/HOME0649B.png"
            );
            break;
          case "Genesect (Shock Drive)":
            setImageSrc(
              "https://archives.bulbagarden.net/media/upload/e/e5/HOME0649Y.png"
            );
            break;
          default:
            setImageSrc("/whoIsThatPokemon.png");
            break;
        }
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [poke_api]);

  return (
    <Link
      href={`/pokemon/${tier
        .replace(" ", "_")
        .replace(/\+/g, "plus")}-${name.replace(" ", "_")}`}
      target="_blank"
      passHref
    >
      <div className="poke-card">
        {loading ? (
          <div className="poke-image">
            <Image
              src="/loading.gif"
              alt="Carregando"
              width={128}
              height={128}
              className="object-contain"
              unoptimized
            />
          </div>
        ) : (
          <div className="poke-image">
            <Image
              src={imageSrc}
              title={imageDescription}
              alt={imageDescription}
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        )}
        <h3 className="poke-name">{name}</h3>
      </div>
    </Link>
  );
});
