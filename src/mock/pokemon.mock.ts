import { Pokemon } from "../models/pokemon.model";
import { TYPES } from "./types.mock";

export const factoryBulbasaur = (): Pokemon => {
  const pokemon = new Pokemon();
  pokemon.hp = {
    current: 45,
    total: 45,
  };
  pokemon.name = "bulbasaur";
  pokemon.attack = 49;
  pokemon.defense = 49;
  pokemon.spAttack = 65;
  pokemon.spDefense = 65;
  pokemon.speed = 45;
  pokemon.type = [TYPES.grass];
  pokemon.image = {
    default: "https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png",
    back: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
    front: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/bulbasaur.gif",
  };
  pokemon.attacks = [
    { name: "Tackle", type: TYPES.normal, category: "Physical", power: 40, accuracy: 100, PowerPoints: 35 },
    { name: "Razor Leaf", type: TYPES.grass, category: "Physical", power: 55, accuracy: 95, PowerPoints: 25 },
    { name: "Seed Bomb", type: TYPES.grass, category: "Physical", power: 80, accuracy: 100, PowerPoints: 15 },
    { name: "Venoshock Punch", type: TYPES.poison, category: "Physical", power: 65, accuracy: 100, PowerPoints: 10 },
  ];
  return pokemon;
};

export const factoryCharmander = (): Pokemon => {
  const pokemon = new Pokemon();
  pokemon.name = "charmander";
  pokemon.hp = {
    current: 39,
    total: 39,
  };
  pokemon.attack = 52;
  pokemon.defense = 43;
  pokemon.spAttack = 60;
  pokemon.spDefense = 50;
  pokemon.speed = 65;
  pokemon.type = [TYPES.fire];
  pokemon.image = {
    default: "https://img.pokemondb.net/sprites/black-white/normal/charmander.png",
    back: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charmander.gif",
    front: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif",
  };
  pokemon.attacks = [
    { name: "Scratch", type: TYPES.normal, category: "Physical", power: 55, accuracy: 100, PowerPoints: 35 },
    { name: "Ember", type: TYPES.fire, category: "Special", power: 40, accuracy: 100, PowerPoints: 25 },
    { name: "Dragon Breath", type: TYPES.dragon, category: "Special", power: 60, accuracy: 100, PowerPoints: 20 },
    { name: "Thunder Punch", type: TYPES.electric, category: "Physical", power: 75, accuracy: 100, PowerPoints: 15 },
  ];
  return pokemon;
};
