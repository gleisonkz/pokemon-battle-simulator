import { factoryBulbasaur, factoryCharmander } from "../mock/pokemon.mock";
import { Command } from "./command.model";
import { Player } from "./player.model";

export class Game {
  private currentTurn = 0;

  constructor() {
    const pokemon1 = factoryBulbasaur();
    const pokemon2 = factoryCharmander();

    this.players = [
      new Player({ name: "M7", pokemons: [pokemon1], currentAttack: pokemon1.attacks[0], currentPokemon: pokemon1 }),
      new Player({ name: "D1", pokemons: [pokemon2], currentAttack: pokemon2.attacks[2], currentPokemon: pokemon2 }),
    ];
  }

  private players: [Player, Player];

  private random() {
    return Math.floor(Math.random() * 2);
  }

  sortPlayers(): void {
    const priority = this.players.map((c) => c.priority).reduce((player1, player2) => player1 - player2);
    (priority === 0 && this.random() && this.players.reverse()) || (priority < 0 && this.players.reverse());
  }

  playTurn(): void {
    this.sortPlayers();
    this.players.forEach((player) => player.executeAction());
    !this.isEndGame() && this.endTurn();
  }

  isEndGame() {
    return false;
  }

  endTurn() {
    this.currentTurn++;
  }

  setAction(player: Player, action: Command) {
    player.setAction(action);
    this.isPlayersReady() && this.playTurn();
  }

  isPlayersReady(): boolean {
    return this.players.every((player) => player.ready);
  }
}
