import { Matrix } from "./matrix";




function main () {
  const matrix = new Matrix(9);
  matrix.initalize();
  matrix.print()
  matrix.rotate90()
  matrix.print()
}

main()
