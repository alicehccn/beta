export enum Role {
  '⚫' = '⚫',
  '⚪' = '⚪',
}

export class Player {
  role: Role
  stones: string[]
  groups: string[][]

  constructor(role: Role) {
    this.role = role
    this.stones = []
    this.groups = []
  }
}


