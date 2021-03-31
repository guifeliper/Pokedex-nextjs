export interface CardProps {
  name: string;
}

export interface Params {
  queryKey: [string, { name: string }];
}

export interface IPokemon {
  name: string;
  image: string;
  hp: string;
  attack: string;
}
