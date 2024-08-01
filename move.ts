type Point = number[];

export class Move {
  name: string;
  point?: Point;

  constructor (name: string, point?: Point) {
    this.name = name.toUpperCase();
    this.point = point;
  }

  public getPoint (name: string): Point {
    const x = parseInt(name);
    const temp = name.split('')[name.length - 1];
    const y = temp.charCodeAt(0) - 65;
    return [x - 1, y];
  }
}
