import { Move } from "./move";

export class History {
  moves: string[];
  size: number;
  player: number;

  constructor() {
    this.moves = [];
    this.size = 0;
    this.player = 0;
  }

  public add (move: string) {
    this.moves.push(move);
    this.size += 1;
    this.player = this.getNextPlayer();
  }

  public getPrev () {
    return this.moves.pop();
  }
  
  public print () {
    this.moves.forEach((move, i) => {
      process.stdout.write(`${move} ${i === this.size - 1 ? '\n\n' : '-> '}`);
    })
  }

  public reset () {
    this.moves = [];
  }
  
  public getNextPlayer () {
    return this.size % 2 === 0 ? 0 : 1;
  }
}
