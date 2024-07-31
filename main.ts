import { Matrix } from "./matrix";
import { Move } from "./moves";


function main () {
  const game = new Matrix(9);
  game.makeMove(new Move(0, 5, 4));
  game.makeMove(new Move(1, 5, 5));
  game.makeMove(new Move(0, 6, 6));
  game.makeMove(new Move(1, 4, 3));
  game.makeMove(new Move(0, 7, 7));
  game.makeMove(new Move(1, 8, 3));
  game.makeMove(new Move(0, 8, 7));
  game.printView();
  game.printHistory();
}

main();
