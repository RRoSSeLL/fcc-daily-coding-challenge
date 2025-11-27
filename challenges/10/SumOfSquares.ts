function memoizedSumOfSquares(): (n: number) => number {
  const sumOfSquaresArray = [0];
  return function sumOfSquares(n: number): number {
    while (true) {
      if (sumOfSquaresArray.length > n) return sumOfSquaresArray[n];
      sumOfSquaresArray.push((sumOfSquaresArray.length * sumOfSquaresArray.length) + sumOfSquaresArray[sumOfSquaresArray.length - 1]);
    }
  }
}

export const sumOfSquares = memoizedSumOfSquares();