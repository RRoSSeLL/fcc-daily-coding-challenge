export function milePace(miles: number, duration: string): string {
  const [minutes, seconds] = duration.split(':');
  const averageSeconds = ((+minutes * 60) + (+seconds)) / miles;
  return `${('' + Math.floor(averageSeconds / 60)).padStart(2, '0')}:${('' + Math.floor(averageSeconds % 60)).padStart(2, '0')}`;
}