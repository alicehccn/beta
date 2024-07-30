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
