import { IPokeTier } from "@/interfaces";
import { decodeAndSplit } from "@/utils";

export function filterByType(data: IPokeTier, filters: string = "") {
  if (filters.length === 0) return data;

  const arrayFilters = decodeAndSplit(filters);

  const result: IPokeTier = {};

  Object.entries(data).forEach(([key, value]) => {
    const listPokemonFiltered = value.filter((poke) => {
      return arrayFilters.some(str => poke.types.includes(str));
    });
    if (listPokemonFiltered.length > 0) result[key] = listPokemonFiltered;
  });

  return result;
}
