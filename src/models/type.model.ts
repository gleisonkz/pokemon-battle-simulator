export type AvailableTypes =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export interface Type {
  name: AvailableTypes;
  advantages: AvailableTypes[];
  weakness: AvailableTypes[];
}

export type KeyValueTypes = {
  [key in AvailableTypes]: Type;
};
