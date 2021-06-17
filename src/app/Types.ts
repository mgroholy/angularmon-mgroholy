export interface ApiResponse {
  count: number;
  next: string;
  previous: string;
  results: ListItem[];
}

export interface ListItem {
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
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: PokemonType[];
}

interface PokemonType {
  type: {
    name: string;
  };
}
