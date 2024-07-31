import { Players } from "./constant";
import { Move } from "./moves";

export class History {
  moves: Move[];
  size: number;
  player: number;

  constructor() {
    this.moves = [];
    this.size = 0;
    this.player = 0;
  }

  public add (move: Move) {
    this.moves.push(move);
    this.size += 1;
    this.player = this.getPlayer(this.size);
  }

  public getPrev () {
    return this.moves.pop();
  }
  
  public print () {
    this.moves.forEach((move, i) => {
      console.log(move);
    })
  }

  public reset () {
    this.moves = [];
  }
  
  public getPlayer (num: number) {
    return num % 2 === 0 ? 0 : 1;
  }

}
