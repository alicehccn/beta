export class Move {
  player: number;
  x: number;
  y: number;
  captured?: [];

  constructor(player, x, y) {
    this.player = player;
    this.x = x;
    this.y = y;
  }
}

const players = {
  0: '⚫',
  1: '⚪',
}


export class Matrix {
  size: number;
  rows: string[][];

  constructor (size: number) {
    this.size = size;
    this.rows = [];
  }

  initalize () {
    for (let i = 1; i < this.size+1; i++) {
      const row: string[] = []
      for (let j = 0; j < this.size+1; j++) {
        const index = i + '' + String.fromCharCode(j + 65);
        row.push(index);
      }
      this.rows.push(row)
    }
  }

  getPosition (x: number, y: number) {
    return this.rows[x-1][y]
  }

  makeMove (move: Move) {
    this.rows[move.x-1][move.y] = players[move.player]
  }

  print () {
    for (let i = 0; i < this.size; i++) {
      process.stdout.write(JSON.stringify(this.rows[i]) + '\n\n')
    }
  }

  rotate90 () {
    const tempRows: string[][] = [];
    for (let i = this.size - 1; i >= 0; i--) {
      const tempRow: string[] = []
      for (let j = this.size; j >= 0; j--) {
        tempRow.push(this.rows[i][j])
      }
      tempRows.push(tempRow);
    }
    this.rows = tempRows;
  }

  stringToNum (char: string): number {
    return char.toUpperCase().charCodeAt(0) - 65;
  }
}
