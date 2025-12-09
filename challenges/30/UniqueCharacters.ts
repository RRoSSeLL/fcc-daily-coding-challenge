export function allUnique(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) > -1) return false;
  }
  return true;
}