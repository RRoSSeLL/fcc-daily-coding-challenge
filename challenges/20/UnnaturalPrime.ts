export function isUnnaturalPrime(n: number): boolean {
  const number = Math.abs(n);
  if (number < 2) return false;
  for (let i = 2; i <= Math.floor(number / 2); i++) {
    if ((number % i) === 0) return false;
  }
  return true;
}