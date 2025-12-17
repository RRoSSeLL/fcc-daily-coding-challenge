export function findMissingNumbers(arr: number[]): number[] {
  const maxValue = arr.reduce((acc, current) => acc > current ? acc : current);
  //const maxValue = arr.sort((a, b) => b - a)[0];
  const missingNumbers = [];
  for (let i = 1; i < maxValue; i++) {
    if (!arr.includes(i)) missingNumbers.push(i);
  }
  return missingNumbers;
}