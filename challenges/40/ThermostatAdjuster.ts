export function adjustThermostat(temp: number, target: number): string {
  switch (true) {
    case (temp > target): return 'cool';
    case (temp < target): return 'heat';
    default: return 'hold';
  }
}