export function jbelmu(text: string): string {
  return text.split(' ').map(word => {
    let returnWord = word;
    if (word.length > 3) {
      const sortedString = word.substring(1, word.length - 1).split('').sort().join('');
      returnWord = `${word[0]}${sortedString}${word[word.length - 1]}`
    }
    return returnWord;
  }).join(' ');
}