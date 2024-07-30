import { Move } from "./moves";

export class History {
  moves: Move[];

  constructor() {
    this.moves = [];
  }

  public add (move: Move) {
    this.moves.push(move);
  }

  public getPrev () {
    return this.moves.pop();
  }
  
  public print () {
    this.moves.forEach((move) => {
      console.log(move)
    })
  }
  
}
