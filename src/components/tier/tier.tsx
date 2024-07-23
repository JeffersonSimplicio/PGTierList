import { IPokeInfo } from "@/interfaces";
import { PokeCell } from "@/components";
import "./tier.css";

interface ITierInfo {
  name: string;
  pokeList: IPokeInfo[];
}

export function Tier({ name, pokeList }: ITierInfo) {
  return (
    <section className="my-8">
      <h2 className="tier-name">{name}</h2>
      <div className="tier-grid">
        {pokeList.map((poke, index) => (
          <PokeCell key={index} tier={name} {...poke} />
        ))}
      </div>
    </section>
  );
}
