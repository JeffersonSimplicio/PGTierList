import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Tier } from "./tier";
import { PokeCell } from "@/components";

vi.mock("@/components", () => ({
  PokeCell: vi.fn(() => {
    return null;
  }),
}));

describe("Tier Component", () => {
  const tierName = "Top Tier";
  const pokeList = [
    {
      name: "Pikachu",
      poke_api: "",
      types: [],
      attacks: [],
      is_shiny_available: false,
      is_shadow: false,
      is_mega_or_primal: false,
    },
    {
      name: "Bulbasaur",
      poke_api: "",
      types: [],
      attacks: [],
      is_shiny_available: false,
      is_shadow: false,
      is_mega_or_primal: false,
    },
  ];

  beforeEach(() => {
    (PokeCell as any).mockClear();
  });

  test("renders the tier name", () => {
    render(<Tier name={tierName} pokeList={pokeList} />);
    expect(screen.getByText(tierName)).toBeInTheDocument();
  });

  test("renders PokeCell components for each Pokémon in the list", () => {
    render(<Tier name={tierName} pokeList={pokeList} />);

    const calls = (PokeCell as any).mock.calls;

    pokeList.forEach((poke, index) => {
      const expectedProps = {
        tier: tierName,
        ...poke,
      };

      expect(calls[index]).toEqual(
        expect.arrayContaining([expect.objectContaining(expectedProps)])
      );
    });
  });

  test("renders correct number of PokeCell components", () => {
    render(<Tier name={tierName} pokeList={pokeList} />);
    expect(PokeCell).toHaveBeenCalledTimes(pokeList.length);
  });
});
