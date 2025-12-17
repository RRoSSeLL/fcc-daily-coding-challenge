export function arrayDiff(arr1: string[], arr2: string[]): string[] {
  const filteredArr1 = [...arr1];
  const filteredArr2 = [...arr2];
  arr1.forEach(((item, index) => {
    if (arr2.includes(item)) {
      filteredArr1.splice(filteredArr1.indexOf(item), 1);
      filteredArr2.splice(filteredArr2.indexOf(item), 1);
    }
  }));
  return [...filteredArr1, ...filteredArr2].sort();
}