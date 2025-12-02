export function getLaptopCost(laptops: number[], budget: number): number {
  const sortedPrices = laptops.sort((a, b) => b - a);
  let secondBestOption = 0;
  for (let i = 1; i < sortedPrices.length; i++) {
    if (sortedPrices[i] < budget) {
      secondBestOption = sortedPrices[i];
      break
    }
  }
  return secondBestOption;
}