import { Matrix } from "./matrix";
import { Move } from "./moves";


function main () {
  const game = new Matrix(9);
  game.go(new Move('7h'));
  game.go(new Move('6h'));
  game.go(new Move('7g'));
  game.go(new Move('6g'));
  game.go(new Move('8h'));
  game.go(new Move('7f'));
  game.go(new Move('2b'));
  game.go(new Move('8f'));
  game.go(new Move('2h'));
  game.go(new Move('8g'));

  game.printView();
  game.printHistory();
}

main();
