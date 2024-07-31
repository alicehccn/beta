import { History } from "./history";
import { Move } from "./moves";

const players = {
  0: '⚫',
  1: '⚪',
}



export class Matrix {
  size: number;
  rows: string[][];
  history: History;

  constructor (size: number) {
    this.size = size;
    this.rows = [];
    this.history = new History();

    this.initalize();
  }

  private initalize () {
    for (let i = 1; i < this.size+1; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.size; j++) {
        const index = i + '' + this.numToString(j);
        row.push(index);
      }
      this.rows.push(row);
    }
    this.printView();
  }

  public getPosition (x: number, y: number) {
    return this.rows[x-1][y];
  }

  public makeMove (move: Move) {
    this.rows[move.x-1][move.y] = players[move.player];
    this.history.add(move);
  }

  public printView () {
    console.log('------------------------------------')
    for (let i = 0; i < this.size; i++) {
      process.stdout.write(JSON.stringify(this.rows[i].join('  ')) + '\n\n');
    }
  }

  public printHistory() {
    this.history.print();
  }

  private rotate90 () {
    const tempRows: string[][] = [];
    for (let i = this.size - 1; i >= 0; i--) {
      const tempRow: string[] = [];
      for (let j = this.size; j >= 0; j--) {
        tempRow.push(this.rows[i][j]);
      }
      tempRows.push(tempRow);
    }
    this.rows = tempRows;
  }

  private numToString (char: number): string {
    return String.fromCharCode(char + 65);
  }
}
