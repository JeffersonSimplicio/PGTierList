import { IPokeInfo } from "@/interfaces";
import { PokeCell } from "@/components";

interface ITierInfo {
  name: string;
  pokeList: IPokeInfo[];
}

export function Tier({ name, pokeList }: ITierInfo) {
  return (
    <section>
      <h2>{name}</h2>
      {pokeList.map((poke, index) => (
        <PokeCell key={index} {...poke} />
      ))}
    </section>
  );
}
