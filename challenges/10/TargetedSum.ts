export function findTarget(arr: number[], target: number): [number, number] | string {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === target) return [i, j];
    }
  }
  return 'Target not found';
}