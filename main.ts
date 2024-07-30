import { Matrix } from "./matrix";
import { Move } from "./moves";


function main () {
  const game = new Matrix(9);
  game.makeMove(new Move(0, 5, 4))
  game.makeMove(new Move(1, 4, 2))
  game.makeMove(new Move(0, 7, 7))
  game.makeMove(new Move(1, 7, 3))
  game.printView()
  game.printHistory()
}

main()
