export class Player {
  color: Color;
  stones: string[];
  groups: string[][];

  constructor(color: Color) {
    this.color = color;
    this.stones = [];
    this.groups = [];
  }
}

enum Color {
  "⚫",
  "⚪",
}
