import { Role } from './player'

export class History {
  steps: string[]
  size: number
  next: number

  constructor() {
    this.steps = []
    this.size = 0
    this.next = this.getNextPlayer()
  }

  public add(step: string) {
    this.steps.push(step)
    this.size += 1
    this.next = this.getNextPlayer()
  }

  public print() {
    this.steps.forEach((step, i) => {
      process.stdout.write(`${step} ${i === this.size - 1 ? '\n\n' : '-> '}`)
    })
  }

  public reset() {
    this.steps = []
  }

  public getNextPlayer() {
    return this.size % 2 === 0 ? 0 : 1
  }
}
