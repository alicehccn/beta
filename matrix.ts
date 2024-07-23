
export class Matrix {
  size: number;
  rows: string[][];

  constructor (size: number) {
    this.size = size;
    this.rows = [];
  }

  initalize () {
    for (let i = 0; i < this.size; i++) {
      const row: string[] = []
      for (let j = 0; j < this.size; j++) {
        const index = i+j;
        const value = String.fromCharCode(index + 65);
        row.push(value);
      }
      this.rows.push(row)
    }
  }

  getPosition (x: number, y: string) {
    return this.rows[x][y]
  }

  print () {
    for (let i = 0; i < this.size; i++) {
      process.stdout.write(JSON.stringify(this.rows[i]) + '\n')
    }
    process.stdout.write(' ===================================\n')
  }

  rotate90 () {
    const tempRows: string[][] = [];
    for (let i = this.size - 1; i >= 0; i--) {
      const tempRow: string[] = []
      for (let j = this.size - 1; j >= 0; j--) {
        tempRow.push(this.rows[i][j])
      }
      tempRows.push(tempRow);
    }
    this.rows = tempRows;
  }
}
