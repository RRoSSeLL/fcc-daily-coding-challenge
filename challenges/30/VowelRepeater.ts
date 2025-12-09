export function repeatVowels(str: string): string {
  let vowelIndex = -1;
  return str.split('').map((char) => {
    if (/[aeiou]/i.test(char)) {
      return char + "".padStart(++vowelIndex, char.toLowerCase());
    }
    return char;
  }).join('');
}