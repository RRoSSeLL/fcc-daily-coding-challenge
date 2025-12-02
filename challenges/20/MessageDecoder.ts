export function decode(message: string, shift: number): string {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = lowercase.toUpperCase();
  const uppercaseCheck = /[A-Z]/;
  return message.split('').map(char => {
    let currentCase = uppercaseCheck.test(char) ? uppercase : lowercase;
    let originalIndex = currentCase.indexOf(char);
    if (originalIndex === -1) return char;
    let targetIndex = (originalIndex - shift);
    if (targetIndex < 0) targetIndex = 26 + targetIndex;
    if (targetIndex > 25) targetIndex -= 26;
    return currentCase.charAt(targetIndex);
  }).join('');
}