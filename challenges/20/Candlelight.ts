export function burnCandles(candles: number, leftoversNeeded: number): number {
  let currentCandles = candles;
  let burntCandles = 0;
  let currentLeftovers = 0;
  while (currentCandles) {
    let initialCandles = currentCandles;
    let totalLeftOvers = initialCandles + currentLeftovers;
    burntCandles += initialCandles;
    currentCandles = Math.floor(totalLeftOvers / leftoversNeeded);
    currentLeftovers = (totalLeftOvers % leftoversNeeded);
  }
  return burntCandles;
}