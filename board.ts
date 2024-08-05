import { Color, Players } from './constant'
import { charCodeToString } from './helpers'
import { History } from './history'
import { Player } from './player'
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
    this.players = [new Player(Color['⚫']), new Player(Color['⚪'])]

    this.initalize()
  }

  private initalize(): void {
    for (let i = 1; i < this.size + 1; i++) {
      const row: string[] = []
      for (let j = 0; j < this.size; j++) {
        const index = i + '' + charCodeToString(j)
        row.push(index)
      }
      this.rows.push(row)
    }
    this.printView()
  }

  public go(place: Point): void {
    const [x, y] = place.getPoint(place.label)
    const isValid = this.validatePoint(x, y)
    if (!isValid) {
      return
    }
    this.rows[x][y] = Players[this.history.next]
    this.history.add(place.label)
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
      `Next player: ${Players[this.history.getNextPlayer()]}\n\n`
    )
  }

  private validatePoint(x: number, y: number): boolean {
    if (Players.includes(this.rows[x][y])) {
      return false
    }
    return true
  }
}
