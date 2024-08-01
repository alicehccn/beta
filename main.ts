import { Board } from "./board";
import { Move } from "./move";


function main () {
  const game = new Board(9);
  game.go(new Move('7h'));
  game.go(new Move('6h'));
  game.go(new Move('7g'));
  game.go(new Move('6g'));
  game.go(new Move('8h'));
  game.go(new Move('7f'));
  game.go(new Move('2b'));
  game.go(new Move('7h'));
  game.go(new Move('8f'));
  game.go(new Move('2h'));
  game.go(new Move('8g'));
  game.go(new Move('6g'));
  game.go(new Move('5E'));
  game.go(new Move('9h'));
  game.go(new Move('6f'));
  game.go(new Move('8I'));
  game.go(new Move('5g'));
  game.go(new Move('5g'));

  game.printView();
}

main();
