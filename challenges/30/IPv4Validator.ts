export function isValidIPv4(ipv4: string): boolean {
  const ipFormatValidator = /^(?:(?:\d{1,3}\.){3})\d{1,3}$/;
  if (!(ipFormatValidator.test(ipv4))) return false;
  let invalidSegment = false;
  ipv4.split('.').forEach(segment => {
    if (((segment.length > 1) && (segment.charAt(0) === '0')) || (+segment > 255)) invalidSegment = true;
  });
  return invalidSegment ? false : true;
}