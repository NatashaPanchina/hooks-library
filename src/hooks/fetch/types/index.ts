export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface AbilityType {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonsType {
  data: {
    abilities: Array<AbilityType>;
    id: number;
    name: string;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    types: Array<Type>;
  };
}
