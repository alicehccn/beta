import { Board } from "./board";
import { Point } from "./point";

function main() {
  const game = new Board(9);
  game.go(new Point("7h"));
  game.go(new Point("6h"));
  game.go(new Point("7g"));
  game.go(new Point("6g"));
  game.go(new Point("8h"));
  game.go(new Point("7f"));
  game.go(new Point("2b"));
  game.go(new Point("7h"));
  game.go(new Point("8f"));
  game.go(new Point("2h"));
  game.go(new Point("8g"));
  game.go(new Point("6g"));
  game.go(new Point("5E"));
  game.go(new Point("9h"));
  game.go(new Point("6f"));
  game.go(new Point("8I"));
  game.go(new Point("5g"));
  game.go(new Point("5g"));

  game.printView();
  game.printHistory();
}

main();
