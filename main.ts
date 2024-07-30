import { Matrix, Move } from "./matrix";



function main () {
  const matrix = new Matrix(9);
  matrix.initalize();
  matrix.makeMove(new Move(0, 5, 4))
  matrix.makeMove(new Move(1, 4, 2))
  matrix.makeMove(new Move(0, 7, 7))
  matrix.makeMove(new Move(1, 7, 3))
  matrix.print()
}

main()
