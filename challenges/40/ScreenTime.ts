export function tooMuchScreenTime(hours: number[]): boolean {
  let total = 0;
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= 10) return true;
    if (i < 5) {
      if (((hours[i] + hours[i + 1] + hours[i + 2]) / 3) >= 8) return true;
    }
    total += hours[i];
  }
  if ((total / 7) >= 6) return true;
  return false;
}