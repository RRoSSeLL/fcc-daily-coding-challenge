export function decode(s: string): string {
  let decodedString = s;
  let noNestedParenthesisCheck = /(\([^\(\)]+?\))/g;
  let match = decodedString.match(noNestedParenthesisCheck);
  while (match) {
    match.forEach(str => {
      decodedString = decodedString.replace(str, str.substring(1, str.length - 1).split('').reverse().join(''));
    });
    match = decodedString.match(noNestedParenthesisCheck);
  }
  return decodedString;
}
