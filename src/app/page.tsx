import { Suspense } from "react";
import { IPokeTiers, IPokeType } from "@/interfaces";
import { Tier, Loading, CheckboxFilter } from "@/components";
import { getData, filterByTier } from "@/utils";

interface IqueryParamsTypes {
  tiers?: string,
  types?: string
}

export default async function Home({ searchParams }: {searchParams?: IqueryParamsTypes}) {
  const allData = await getData<IPokeTiers>("pokeTiers.json");
  const typesPokemon = await getData<IPokeType>("typesPokemon.json");

  const dataFilteredByTier = filterByTier(allData, searchParams?.tiers);
  

  return (
    <main>
      <span>Filtro de Tier</span>
      <CheckboxFilter listOptions={allData} queryName="tiers"/>
      {/* <span>Filtro de Tipo</span>
      <CheckboxFilter listOptions={typesPokemon} queryName="types"/> */}
      <h2>Lista de Pokemon</h2>
      <Suspense fallback={<Loading />}>
        {dataFilteredByTier &&
          Object.keys(dataFilteredByTier).map((key, index) => (
            <Tier key={index} name={key} pokeList={dataFilteredByTier[key]} />
          ))}
      </Suspense>
    </main>
  );
}
