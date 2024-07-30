export class Move {
  player: number;
  x: number;
  y: number;
  captured?: [];

  constructor(player: number, x: number, y: number) {
    this.player = player;
    this.x = x;
    this.y = y;
  }
}

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
