export function charToString(char: number): string {
  return String.fromCharCode(char + 65).toUpperCase()
}

export function strToChar(str: string): number {
  const temp = str.split('')[str.length - 1]
  return temp.charCodeAt(0) - 65
}
