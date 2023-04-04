export interface Pokemons {
    results: {
        name: string;
        url: string;
    }[];
}

export interface PokemonDetails {
    name: string;
    id: number;
    abilities?: Array<any>;
    types?: Array<any>;
  }
  