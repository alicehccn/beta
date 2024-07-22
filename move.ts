export class Move {
  value: number;
  x: number;
  y: number;
  captured: [];

  constructor(value: number, x: number, y: number) {
    this.value = value;
    this.x = x;
    this.y = y;
  }
}
