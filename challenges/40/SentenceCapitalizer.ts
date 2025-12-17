export function capitalize(paragraph: string): string {
  const firstLetter = paragraph.charAt(paragraph.search(/[a-z]/));
  let capitalizedParagraph = paragraph.replace(firstLetter, firstLetter.toUpperCase());
  paragraph.match(/([.\?!]\s*[a-z])/g)?.forEach(match => {
    const capitalizedMatch = `${match.substring(0, match.length - 1)}${match.charAt(match.length - 1).toUpperCase()}`;
    capitalizedParagraph = capitalizedParagraph.replace(match, capitalizedMatch);
  });
  return capitalizedParagraph;
}