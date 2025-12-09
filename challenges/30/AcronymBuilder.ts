export function buildAcronym(str: string): string {
  return str.split(' ').map(word => {
    if (['a', 'for', 'an', 'and', 'by', 'of'].includes(word)) return '';
    return word[0].toUpperCase();
  }).join('');
}