export function fibonacciSequence(startSequence: [number, number], length: number): number[] {
  const finalSequence = [...startSequence];
  while (finalSequence.length < length) {
    finalSequence.push(finalSequence[finalSequence.length - 2] + finalSequence[finalSequence.length - 1])
  }
  return finalSequence.slice(0, length);
}