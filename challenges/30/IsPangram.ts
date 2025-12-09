export function isPangram(sentence: string, letters: string): boolean {
  const sortedLetters = letters.split('').sort().join('');
  const sortedSentenceLetters = Array.from(new Set(sentence.replaceAll(/[^a-z]/gi, '').toLocaleLowerCase().split(''))).sort().join('');
  return sortedLetters === sortedSentenceLetters;
}