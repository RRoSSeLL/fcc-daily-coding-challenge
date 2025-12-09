export function generateHex(color: string): string {
  const randomHexValues: number[] = [0, 0, 0].map(() => Math.floor(Math.random() * 256)).sort((a, b) => b - a);
  switch (color) {
    case 'red': return `${randomHexValues[0].toString(16).padStart(2, '0')}${randomHexValues[1].toString(16).padStart(2, '0')}${randomHexValues[2].toString(16).padStart(2, '0')}`;
    case 'green': return `${randomHexValues[1].toString(16).padStart(2, '0')}${randomHexValues[0].toString(16).padStart(2, '0')}${randomHexValues[2].toString(16).padStart(2, '0')}`;
    case 'blue': return `${randomHexValues[1].toString(16).padStart(2, '0')}${randomHexValues[2].toString(16).padStart(2, '0')}${randomHexValues[0].toString(16).padStart(2, '0')}`;
    default: return 'Invalid color';
  }
}