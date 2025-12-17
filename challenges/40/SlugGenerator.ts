export function generateSlug(str: string): string {
  return str.trim().replaceAll(/[^\w\s]/g, '').replaceAll(/\s+/g, '%20').toLocaleLowerCase();
}