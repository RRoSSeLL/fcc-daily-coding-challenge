export function costToFill(tankSize: number, fuelLevel: number, pricePerGallon: number): string {
  return '$' + ((tankSize - fuelLevel) * pricePerGallon).toFixed(2);
}