import { Players } from "./constant";
import { History } from "./history";
import { Move } from "./moves";


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

  public go (move: Move) {
    const [x, y] = this.getPosition(move);
    this.rows[x-1][y] = Players[this.history.player];
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
    return String.fromCharCode(char + 65).toUpperCase();
  }

  private getPosition(move: Move): number[] {
    const x = parseInt(move.name);
    const temp = move.name.split('')[move.name.length - 1];
    const y = temp.charCodeAt(0) - 65
    return [x, y]
  }
}
