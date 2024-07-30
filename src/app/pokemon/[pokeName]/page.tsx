import type { Metadata } from "next";
import Image from "next/image";
import { IPokeTier, IPokeType } from "@/interfaces";
import { getData } from "@/utils";
import "./pokeDetails.css";
import { metadataBase } from '@/app/metadata';

interface Props {
  params: { pokeName: string };
}

function removeUnderscore(str: string) {
  const decoded = decodeURIComponent(str);
  return decoded.replace(/_/g, " ");
}


export async function generateMetadata({
  params: { pokeName },
}: Props): Promise<Metadata> {
  const [tier_tmp, name_tmp] = pokeName.split("-");
  const tier = removeUnderscore(tier_tmp);
  const name = removeUnderscore(name_tmp);

  const allData = await getData<IPokeTier>("pokeTiers.json");
  const pokeInfo = Object.values(allData)
    .flat()
    .find((poke) => poke.name === name);

  let urlImage = `${metadataBase}/whoIsThatPokemon.png`; // Use a URL base para imagens
  let title = "Detalhes do Pokémon";
  let description = "Informações não disponíveis.";

  if (pokeInfo) {
    try {
      const response = await fetch(pokeInfo.poke_api);
      const data = await response.json();
      urlImage = data.sprites.other["official-artwork"].front_default;
    } catch (error) {}

    title = pokeInfo.name;
    description = `${pokeInfo.name} está classificado no tier ${tier}. Veja seus melhores golpes e mais detalhes.`;
  }

  return {
    title,
    openGraph: {
      title: `Detalhes do ${title}`,
      description,
      images: [urlImage],
    },
  };
}

export default async function PokemonDetails({ params: { pokeName } }: Props) {
  const [tier_tmp, name_tmp] = pokeName.split("-");
  const tier = removeUnderscore(tier_tmp);
  const name = removeUnderscore(name_tmp);

  const allData = await getData<IPokeTier>("pokeTiers.json");
  const listTypes = await getData<IPokeType>("typesPokemon.json");
  const pokeInfo = allData[tier].filter((poke) => poke.name === name)[0];

  const imageDescription = `Imagem do Pokémon ${pokeInfo.name}`;
  let urlImage: string;

  try {
    const response = await fetch(pokeInfo.poke_api);
    const data = await response.json();
    urlImage = data.sprites.other["official-artwork"].front_default;
  } catch (error) {
    urlImage = "/whoIsThatPokemon.png";
  }

  return (
    <main className="main-poke-details">
      <h2 className="title-page">Detalhes do Pokémon</h2>
      <h3 className="name-poke">{pokeInfo.name}</h3>
      <div className="flex justify-center mb-6">
        <Image
          src={urlImage}
          title={imageDescription}
          alt={imageDescription}
          height={128}
          width={128}
          className="image-poke"
        />
      </div>
      <h4 className="ranking-position">{tier}</h4>
      <h4 className="title-types">Tipos:</h4>
      <div className="types-container">
        {pokeInfo.types.map((type, index) => (
          <span key={index} className="type-envelope">
            {listTypes[type]}
          </span>
        ))}
      </div>

      <h2 className="title-attack">Ataques</h2>
      {pokeInfo.attacks.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-attack">
            <thead className="table-head">
              <tr>
                <th className="th-head">Tipo</th>
                <th className="th-head">Ataque Rápido</th>
                <th className="th-head">Ataque Carregado</th>
              </tr>
            </thead>
            <tbody>
              {pokeInfo.attacks.map((attack, index) => (
                <tr key={index} className="border-b border-neutral">
                  <td className="py-2 px-4">{attack.type}</td>
                  <td className="py-2 px-4">{attack.fast_attack}</td>
                  <td className="py-2 px-4">{attack.charged_attack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-neutral text-center">Nenhum ataque disponível.</p>
      )}
    </main>
  );
}
