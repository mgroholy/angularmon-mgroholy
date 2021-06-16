export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  id: number;
  sprites: {
    front_default: string;
    other: {
      official_artwork: {
        front_default: string;
      };
    };
  };
}