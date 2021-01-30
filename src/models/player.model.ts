import { Command } from "./command.model";
import { Attack, Pokemon } from "./pokemon.model";

export interface IPlayer {
  name: string;
  currentAttack: Attack;
  currentPokemon: Pokemon;
  pokemons: [Pokemon];
}

type PlayerProps = {
  [key in keyof IPlayer]: Player[key];
};

export class Player implements IPlayer {
  constructor(properties: PlayerProps) {
    Object.assign(this, properties);
  }

  name: string;
  currentAttack: Attack;
  currentPokemon: Pokemon;
  pokemons: [Pokemon];

  private _command: Command;

  setAction(command: Command) {
    this._command = command;
  }

  get priority() {
    return this._command.priority || this.currentPokemon.speed;
  }

  get ready() {
    return !!this._command;
  }

  executeAction(): any {
    const result = this._command.execute();
    this._command = undefined;
    return result;
  }
}
