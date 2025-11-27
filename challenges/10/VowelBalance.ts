export function isBalanced(s: string): boolean {
  let isBalanced = true;
  if (s.length > 1) {
    const countBowels = /([aeiou])/gi;
    const middle = Math.floor(s.length / 2);
    const firstHalf = s.substring(0, middle).match(countBowels)?.length;
    const secondHalf = s.substring(s.length - middle, s.length).match(countBowels)?.length;
    if (firstHalf !== secondHalf) isBalanced = false;
  }
  return isBalanced;
}