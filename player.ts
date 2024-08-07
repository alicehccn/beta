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

  public findConn(point: string, conn: string[]) {
    let newGroup: string[] = []
    const partner = this.findPair(point, conn)
    if (!partner) {
      const group = this.findGroup(point, conn)
      if (group) {
        newGroup.concat(group)
      }
    }
    if (newGroup.length > 0) {
      this.stones.push(point)
    }
  }

  private findGroup(point: string, conn: string[]): string[] {
    let group: string[] = []
    for (let i = 0; i < this.groups.length; i++) {
      for (let j = 0; j < conn.length; j++) {
        if (this.groups[i].includes(conn[j])) {
          this.groups[i].push(point)
          group = this.groups[i]
          break // any neighbor will do
        }
      }
    }
    return group
  }

  private findPair(point: string, conn: string[]): string {
    let partner: string = ''
    for (let i = 0; i < conn.length; i++) {
      const index = this.stones.indexOf(conn[i])
      if (index > -1) {
        const temp = this.stones[index]
        this.stones.splice(index, 1)
        this.groups.push([point, temp])
        partner = temp
        break
      }
    }
    return partner
  }
}
