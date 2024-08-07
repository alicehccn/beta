import { charToString, strToChar } from './helpers'

export class Point {
  label: string
  point: number[]

  constructor(label: string) {
    this.label = label.toUpperCase()
    this.point = this.getPoint(label)
  }

  public getPoint(label: string): number[] {
    const x = parseInt(label)
    const y = strToChar(label)
    return [x - 1, y]
  }

  public getLabel(point: number[]): string {
    const [x, y] = point || []
    return `${x}${charToString(y)}`
  }

  public findNorth(): string {
    const [x, y] = this.point || []
    return this.getLabel([x + 1, y])
  }

  public findEast() {
    const [x, y] = this.point || []
    return this.getLabel([x, y + 1])
  }

  public findSouth() {
    const [x, y] = this.point || []
    return this.getLabel([x - 1, y])
  }

  public findWest() {
    const [x, y] = this.point || []
    return this.getLabel([x, y - 1])
  }

  public findAdjacents(point: Point): string[] {
    const north = point.findNorth()
    const east = point.findEast()
    const south = point.findSouth()
    const west = point.findWest()

    return [north, east, south, west].filter((n) => n)
  }
}
