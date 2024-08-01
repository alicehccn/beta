export class Player {
  color: string;
  groups: string[][];

  constructor (color: string) {
    this.color = color;
  }

  public addToGroups(move: string) {
    // this.groups.forEach((g) => {

    // })

    for (let i = 0; i < this.groups.length; i++) {
      
    }
  }

  public foundAjacent(move: string, group: string[]) {
    return group.includes(move);
  }
}