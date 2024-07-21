import { IPokeTiers } from "@/interfaces";
import { decodeAndSplit } from "@/utils";

function formatTier(nivel: string) {
  const [letra, ...resto] = nivel.split('Tier');
  return `${letra} Tier${resto.join('Tier')}`;
}

export function filterByTier(data: IPokeTiers, filters: string = "") {
  if (filters.length === 0) return data;
 
  const arrayFilters = decodeAndSplit(filters).map(formatTier
  );

  const result: IPokeTiers = {};
  arrayFilters.forEach(e => {
    if (e in data) {
      result[e] = data[e];
    }
  });

  return result;
}
