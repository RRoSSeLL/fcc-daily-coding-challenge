const hexChars = '0123456789abcdef'.split('');

function decToHex(n: number): string {
  let rest = n;
  let remainder = 0;
  let hexString = '';
  do {
    remainder = rest % 16;
    rest = Math.floor(rest / 16);
    hexString = hexChars[remainder] + hexString;
  } while (rest);
  return hexString;
}

export function rgbToHex(rgb: string): string {
  return `#${rgb.match(/(\d{1,3})/g)?.map(item => decToHex(+item).padStart(2, '0')).join('')}`;
  // return `#${rgb.match(parseRGBValues)?.map(item => (+item).toString(16).padStart(2, '0')).join('')}`;
}