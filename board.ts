import { Players } from './constant'
import { charToString } from './helpers'
import { History } from './history'
import { Player, Role } from './player'
import { Point } from './point'

export class Board {
  size: number
  rows: string[][]
  history: History
  players: Player[]

  constructor(size: number) {
    this.size = size
    this.rows = []
    this.history = new History()
    this.players = []

    this.initalize()
  }

  private initalize(): void {
    for (let i = 1; i < this.size + 1; i++) {
      const row: string[] = []
      for (let j = 0; j < this.size; j++) {
        const index = i + '' + charToString(j)
        row.push(index)
      }
      this.rows.push(row)
    }
    this.players = [new Player(Role['⚫']), new Player(Role['⚪'])]
    this.printView()
  }

  public go(point: Point): void {
    const conn = point.findAdjacents(point)
    if (conn.length > 0) {
      this.players[this.history.next].findConn(point.label, conn)
    }
    this.placeStone(point.point)
    this.history.add(point.label)
  }

  public printHistory(): void {
    this.history.print()
  }

  public printView(): void {
    process.stdout.write('------------------------------------\n')
    for (let i = this.size - 1; i >= 0; i--) {
      process.stdout.write(JSON.stringify(this.rows[i]?.join('  ')) + '\n')
      if (i === 0) {
        process.stdout.write('------------------------------------\n')
      } else {
        process.stdout.write('\n')
      }
    }
    process.stdout.write(
      `Next player: ${this.players[this.history.next].role}\n\n`
    )
  }

  public placeStone(point: number[]) {
    this.rows[point[0]][point[1]] = this.players[this.history.next].role
  }
}
