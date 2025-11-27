export function spaceJam(s: string): string {
  return s.replaceAll(' ', '').toUpperCase().split('').join('  ')
}