import { Suspense } from "react";
import { IPokeTier, IPokeType } from "@/interfaces";
import { Tier, Loading, CheckboxFilter } from "@/components";
import { getData, filterByTier, filterByType } from "@/utils";

interface IqueryParamsTypes {
  tiers?: string;
  types?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: IqueryParamsTypes;
}) {
  const allData = await getData<IPokeTier>("pokeTiers.json");
  const typesPokemon = await getData<IPokeType>("typesPokemon.json");

  const dataFilteredByTier = filterByTier(allData, searchParams?.tiers);
  const dataFilteredByType = filterByType(
    dataFilteredByTier,
    searchParams?.types
  );

  return (
    <main className="pr-4">
      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="flex gap-4">
          <CheckboxFilter
            listOptions={allData}
            queryName="tiers"
            text="Filtrar por Tier"
          />
          <CheckboxFilter
            listOptions={typesPokemon}
            queryName="types"
            text="Filtrar por Tipo"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4">Lista de Pokémon</h2>
      </div>
      {/* Suspense não funcionando corretamente */}
      <Suspense fallback={<Loading />}>
        {dataFilteredByType &&
          Object.keys(dataFilteredByType).map((key, index) => (
            <Tier key={index} name={key} pokeList={dataFilteredByType[key]} />
          ))}
      </Suspense>
    </main>
  );
}
