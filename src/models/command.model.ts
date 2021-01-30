import { Player } from "./player.model";
import { Pokemon } from "./pokemon.model";

export interface Command {
  execute(): void;
  typeAction: TypeAction;
  priority: 0 | 500;
}

export type TypeAction = "Switch" | "Attack";

export class SwitchCommand implements Command {
  constructor(private player: Player, private newCurrentPokemon: Pokemon) {}
  priority: 500;
  typeAction: "Switch";

  execute(): void {
    this.player.currentPokemon = this.newCurrentPokemon;
  }
}

export class AttackCommand implements Command {
  constructor(private players: Player[]) {}
  priority: 0;

  typeAction: "Attack";

  execute(): void {
    Number.MAX_VALUE;
    const [attackerPokemon, defensorPokemon]: Pokemon[] = this.players.map((c) => c.currentPokemon);
    defensorPokemon.applyDamage(attackerPokemon);
  }
}
