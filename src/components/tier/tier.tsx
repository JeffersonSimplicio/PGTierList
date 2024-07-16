import {IPokeInfo} from '@/interfaces/pokeDataInterfaces';

interface ITierInfo {
    name: string;
    pokeList: IPokeInfo[]
}

export default function Tier({name, pokeList}: ITierInfo) {
    return (
        <section>
            <h2>{name}</h2>
            {pokeList.map((poke, index) => (
                <div key={index}>{poke.name}</div>
            ))}
        </section>
    );
} 