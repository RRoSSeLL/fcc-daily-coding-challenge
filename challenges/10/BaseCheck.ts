export function isValidNumber(n: string, base: number): boolean {
  if (base < 2 || base > 36) return false;
  const validChars = '0123456789abcdefghijklmnopqrstuvwxyz'.substring(0, base);
  return new RegExp(`^[${validChars}]+$`, 'gi').test(n.toLocaleLowerCase());
}