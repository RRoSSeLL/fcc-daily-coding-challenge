function memoizedFactorial(): (n: number) => number {
  const factorialArray = [1]
  return function factorial(n: number) {
    while (true) {
      if (factorialArray[n]) return factorialArray[n];
      factorialArray.push(factorialArray.length * factorialArray[factorialArray.length - 1])
    }
  }
}

export const factorial = memoizedFactorial();