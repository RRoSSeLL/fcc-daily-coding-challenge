export function evaulate(numbers: number[], operators: string[]): number {
  return numbers.reduce((acc, item, index): number => {
    switch (operators[(index - 1) % operators.length]) {
      case '+': return acc + item;
      case '-': return acc - item;
      case '*': return acc * item;
      case '/': return acc / item;
      case '%': return acc % item;
      default: return acc;
    }
  });
}