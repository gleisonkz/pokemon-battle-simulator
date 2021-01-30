import { Attack, HP, Image } from "./pokemon-properties.model";
import { Type } from "./type.model";

export class Pokemon {
  name: string;
  type: [Type, Type?];
  image: Image;
  hp: HP;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  attacks: [Attack, Attack, Attack, Attack];
  lastPercentDamaged: number;

  applyDamage(attackerPokemon: Pokemon): void {
    const damage = attackerPokemon.calculateDamage(this);
    const percentageDamaged = (damage / this.hp.current) * 100;
    this.hp.current -= damage;
    this.lastPercentDamaged = percentageDamaged;
  }

  calculateDamage(defensorPokemon: Pokemon) {
    //Damage = (0.5 X Power X Attack / Defense X Modifier) + 1
    //Damage = (0.5 X Power X SpAttack / SpDefense X Modifier) + 1
    return 300;
  }
}
