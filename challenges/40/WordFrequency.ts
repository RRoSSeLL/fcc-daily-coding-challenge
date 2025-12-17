export function getWords(paragraph: string): string[] {

  const wordMap = new Map();
  paragraph.toLowerCase().match(/[a-z']+/g)?.forEach(word => {
    if (wordMap.has(word)) wordMap.set(word, wordMap.get(word) + 1);
    else wordMap.set(word, 1);
  });
  return Array.from(wordMap).sort((wordCount1, wordCount2) => wordCount2[1] - wordCount1[1]).slice(0, 3).map(wordCount => wordCount[0]);
}