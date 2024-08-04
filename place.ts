import { charCodeToString } from "./helpers";

type Point = number[];

export class Place {
  label: string;
  point: Point;
  north?: string;
  east?: string;
  south?: string;
  west?: string;

  constructor (label: string) {
    this.label = label.toUpperCase();
    this.point = this.getPoint(label);
  }

  public getPoint (label: string): Point {
    const x = parseInt(label);
    const temp = label.split('')[label.length - 1];
    const y = temp.charCodeAt(0) - 65;
    return [x - 1, y];
  }

  public getLabel (point: Point): string | undefined {
    const [x, y] = point || [];
    return `${x}${charCodeToString(y)}`;
  }

  public findNorth () {
    const[x, y] = this.point || [];
    this.north = this.getLabel([x+1, y]);
  }

  public findEast () {
    const[x, y] = this.point || [];
    this.east = this.getLabel([x, y+1]);
  }

  public findSouth () {
    const[x, y] = this.point || [];
    this.south = this.getLabel([x-1, y]);
  }

  public findWest () {
    const[x, y] = this.point || [];
    this.south = this.getLabel([x, y-1]);
  }
}
