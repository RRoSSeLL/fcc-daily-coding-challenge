export function findDuplicates(arr: number[]): number[] {
  const duplicates: number[] = [];
  const sortedArray = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      if (!(duplicates.find(number => number === sortedArray[i]))) duplicates.push(sortedArray[i]);
    }
  }
  return duplicates;
}