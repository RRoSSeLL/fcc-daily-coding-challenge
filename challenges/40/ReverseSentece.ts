export function reverseSentence(sentence: string): string {
  const reversed: string[] = [];
  sentence.split(/\s+/).forEach(item => reversed.unshift(item));
  return reversed.join(' ');
  //return sentence.split(/\s+/).reverse().join(' ');
}