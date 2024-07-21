export interface IAttack {
  type: string;
  fast_attack: string;
  charged_attack: string;
}

export interface IPokeInfo {
  name: string;
  poke_api: string;
  types: string[];
  attacks: IAttack[];
  is_shiny_available: boolean;
  is_shadow: boolean;
  is_mega_or_primal: boolean;
}

export interface IPokeTier {
  [tier: string]: IPokeInfo[];
}
