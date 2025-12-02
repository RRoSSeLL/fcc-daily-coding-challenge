export function toCamelCase(s: string): string {
  return s.split(/[\s-_]+/).map((word, index) => {
    if (index === 0) return word.toLowerCase();
    return `${word.charAt(0).toUpperCase()}${word.substring(1, word.length).toLowerCase()}`;
  }).join('');
}