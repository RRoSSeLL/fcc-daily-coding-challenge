export function parseRomanNumeral(numeral: string): number {
  let value = 0;
  const valueMap = new Map();
  [['I', 1], ['IV', 4], ['V', 5], ['IX', 9], ['X', 10], ['XL', 40], ['L', 50], ['XC', 90], ['C', 100], ['CD', 400], ['D', 500], ['CM', 900], ['M', 1000]]
    .forEach(item => valueMap.set(item[0], item[1]));
  numeral.match(/((?<!C)M)|(CM)|((?<!C)D)|(CD)|((?<!X)C)|(XC)|((?<!X)L)|(XL)|((?<!I)X)|(IX)|((?<!I)V)|(IV)|(I)/g)?.forEach(token => value += valueMap.get(token));
  return value;
}