function memoizedSquaresWithThree(): (n: number) => number {
  const cumulativeSquaresWithThree = [0];
  return function (n: number) {
    while (true) {
      if (n <= cumulativeSquaresWithThree[cumulativeSquaresWithThree.length - 1]) {
        return cumulativeSquaresWithThree.findIndex(item => n < item) - 1;
      }
      let currentNumber = cumulativeSquaresWithThree[cumulativeSquaresWithThree.length - 1] + 1;
      while (true) {
        if (('' + (currentNumber * currentNumber)).includes('3')) {
          cumulativeSquaresWithThree.push(currentNumber);
          break;
        }
        ++currentNumber;
      }
    }
  }
}

export const squaresWithThree = memoizedSquaresWithThree();