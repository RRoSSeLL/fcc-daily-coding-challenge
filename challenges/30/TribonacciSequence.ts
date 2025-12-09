export function tribonacciSequence(startSequence: number[], length: number): number[] {
  const finalSequence = [...startSequence];
  while (finalSequence.length < length) {
    let last = finalSequence.length - 1;
    finalSequence.push(finalSequence[last] + finalSequence[last - 1] + finalSequence[last - 2]);
  }
  return finalSequence.slice(0, length);
}