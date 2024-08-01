import { Board } from "./board";
import { Place } from "./place";


function main () {
  const game = new Board(9);
  game.go(new Place('7h'));
  game.go(new Place('6h'));
  game.go(new Place('7g'));
  game.go(new Place('6g'));
  game.go(new Place('8h'));
  game.go(new Place('7f'));
  game.go(new Place('2b'));
  game.go(new Place('7h'));
  game.go(new Place('8f'));
  game.go(new Place('2h'));
  game.go(new Place('8g'));
  game.go(new Place('6g'));
  game.go(new Place('5E'));
  game.go(new Place('9h'));
  game.go(new Place('6f'));
  game.go(new Place('8I'));
  game.go(new Place('5g'));
  game.go(new Place('5g'));

  game.printView();
  game.printHistory();
}

main();
