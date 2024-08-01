import { Players } from "./constant";
import { History } from "./history";
import { Move } from "./move";



export class Board {
  size: number;
  rows: string[][];
  history: History;

  constructor (size: number) {
    this.size = size;
    this.rows = [];
    this.history = new History();

    this.initalize();
  }

  private initalize (): void {
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

  public go (move: Move): void {
    const [x, y] = move.getPoint(move.name);
    const isValid = this.validateMove(x, y);
    if(!isValid) {
      return;
    }
    this.rows[x][y] = Players[this.history.next];
    this.history.add(move.name);
  }

  public printHistory (): void {
    this.history.print();
  }

  public printView (): void {
    process.stdout.write('------------------------------------\n');
    for (let i = this.size - 1; i >= 0; i--) {
      process.stdout.write(JSON.stringify(this.rows[i]?.join('  ')) + '\n');
      if (i === 0) {
        process.stdout.write('------------------------------------\n');
      } else {
        process.stdout.write('\n');
      }
    }
    process.stdout.write(`Next player: ${Players[this.history.getNextPlayer()]}\n\n`);
  }

  private numToString (char: number): string {
    return String.fromCharCode(char + 65).toUpperCase();
  }

  private validateMove (x: number, y: number): boolean {
    if (Players.includes(this.rows[x][y])) {
      return false;
    }
    return true;
  }
}
