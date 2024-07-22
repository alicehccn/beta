import { Move } from "./move";

export class Board {
  size: number;
  rows: number[][];

  constructor (size: number) {
    this.size = size;
    this.rows = [];
  }

  initalize () {
    for (let i = 0; i < this.size; i++) {
      const row = new Array(this.size).fill(0)
      this.rows.push(row)
    }
  }

  getPosition (x: number, y: string) {
    return this.rows[x][this.getNumericY(y)]
  }

  addStone (move: Move) {
    this.rows[move.x][move.y] = move.value;
  }

  removeStone (x: number, y: number) {
    this.rows[x][y] = 0;
  }

  print () {
    process.stdout.write('-------------------' + '\n')
    for (let i = this.rows.length - 1; i > 0; i--) {
      process.stdout.write(JSON.stringify(this.rows[i]) + '\n')
    }
    process.stdout.write('-------------------' + '\n')
  }

  getNumericY (char: string): number {
    return char.toUpperCase().charCodeAt(0) - 65;
  }
}
