export function areAnagrams(str1: string, str2: string): boolean {
  let string1 = str1.replaceAll(' ', '').toLowerCase().split('').sort().join('');
  let string2 = str2.replaceAll(' ', '').toLowerCase().split('').sort().join('');
  return (string1 === string2);
}