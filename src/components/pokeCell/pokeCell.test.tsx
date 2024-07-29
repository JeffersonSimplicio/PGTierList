import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { PokeCell } from "./pokeCell";

const mockFetchSuccess = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        sprites: {
          other: {
            "official-artwork": {
              front_default: "https://example.com/pokemon.png",
            },
          },
        },
      }),
  });

const mockFetchFailure = () => Promise.reject(new Error("Failed to fetch"));

describe("PokeCell Component", () => {
  it("renders the component with the correct Pokémon name and image on successful fetch", async () => {
    vi.stubGlobal("fetch", mockFetchSuccess);

    render(
      <PokeCell
        name="Pikachu"
        poke_api="https://pokeapi.co/api/v2/pokemon/25"
        tier="Top"
      />
    );

    const loadingImage = screen.getByAltText("Carregando");
    expect(loadingImage).toBeInTheDocument();

    await waitFor(() => {
      const pokemonImage = screen.getByAltText("Imagem do Pokémon Pikachu");
      expect(pokemonImage).toBeInTheDocument();
      expect(pokemonImage).toHaveAttribute(
        "src",
        expect.stringContaining("pokemon.png")
      );
    });

    const pokemonName = screen.getByRole("heading", { level: 3 });
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent("Pikachu");

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/pokemon/Top-Pikachu");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders with fallback image on fetch failure", async () => {
    vi.stubGlobal("fetch", mockFetchFailure);

    render(
      <PokeCell
        name="Pikachu"
        poke_api="https://pokeapi.co/api/v2/pokemon/25"
        tier="Top"
      />
    );

    const loadingImage = screen.getByAltText("Carregando");
    expect(loadingImage).toBeInTheDocument();

    await waitFor(() => {
      const fallbackImage = screen.getByAltText("Carregando");
      expect(fallbackImage).toBeInTheDocument();
      expect(fallbackImage).toHaveAttribute("src", "/loading.gif");
    });

    const pokemonName = screen.getByRole("heading", { level: 3 });
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent("Pikachu");

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/pokemon/Top-Pikachu");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
