
type Point = number[];

export class Move {
  name: string;
  point?: Point;

  constructor (name: string, point?: Point) {
    this.name = name.toUpperCase();
    this.point = point;
  }

  public getPoint (move: Move): Point {
    const x = parseInt(move.name);
    const temp = move.name.split('')[move.name.length - 1];
    const y = temp.charCodeAt(0) - 65;
    return [x, y];
  }

  public setPoint (move: Move): Point {
    this.point = this.getPoint(move);
    return this.point;
  }
}
