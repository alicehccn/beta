import { charCodeToSTring } from "./helpers";

type Point = number[];

export class Place {
  label: string;
  point?: Point;
  north?: string;
  east?: string;
  south?: string;
  west?: string;

  constructor (label: string, point?: Point) {
    this.label = label.toUpperCase();
    this.point = point;
  }

  public getPoint (name: string): Point {
    const x = parseInt(name);
    const temp = name.split('')[name.length - 1];
    const y = temp.charCodeAt(0) - 65;
    return [x - 1, y];
  }

  public getLabel (point: Point): string | undefined {
    const [x, y] = point || [];
    if (x < 0 || x >= 9) {
      return;
    } 
    return `${x}${charCodeToSTring(y)}`;
  }

  public findAdjacents (label: string) {
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
