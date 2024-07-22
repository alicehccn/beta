import { Board } from "./board";
import { Move } from "./move";



function main () {
  const board = new Board(9);
  board.initalize();

  const value = 1;
  const x = 7 
  const y = board.getNumericY('D')
  const move = new Move(value, x, y)
  board.addStone(move)
  board.print()
}

main()
