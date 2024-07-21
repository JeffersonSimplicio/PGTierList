import { Suspense } from "react";
import { IPokeTier, IPokeType } from "@/interfaces";
import { Tier, Loading, CheckboxFilter } from "@/components";
import { getData, filterByTier, filterByType } from "@/utils";

interface IqueryParamsTypes {
  tiers?: string,
  types?: string
}

export default async function Home({ searchParams }: {searchParams?: IqueryParamsTypes}) {
  const allData = await getData<IPokeTier>("pokeTiers.json");
  const typesPokemon = await getData<IPokeType>("typesPokemon.json");

  const dataFilteredByTier = filterByTier(allData, searchParams?.tiers);
  const dataFilteredByType = filterByType(dataFilteredByTier, searchParams?.types);

  return (
    <main>
      <span>Filtro de Tier</span>
      <CheckboxFilter listOptions={allData} queryName="tiers"/>
      <span>Filtro de Tipo</span>
      <CheckboxFilter listOptions={typesPokemon} queryName="types"/>
      <h2>Lista de Pokemon</h2>
      <Suspense fallback={<Loading />}>
        {dataFilteredByType &&
          Object.keys(dataFilteredByType).map((key, index) => (
            <Tier key={index} name={key} pokeList={dataFilteredByType[key]} />
          ))}
      </Suspense>
    </main>
  );
}
