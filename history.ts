export class History {
  steps: string[]
  size: number
  next: number

  constructor() {
    this.steps = []
    this.size = 0
    this.next = 0
  }

  public add(step: string) {
    this.steps.push(step)
    this.size += 1
    this.next = this.getNextPlayer()
  }

  public getPrev() {
    return this.steps.pop()
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
