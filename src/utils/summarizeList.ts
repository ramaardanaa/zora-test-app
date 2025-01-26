export default function summarizeList(names: string[]): string {
  if (names.length <= 2) {
    return names.join(", ");
  }
  const [first, second, ...rest] = names;
  return `${first}, ${second}, ${rest.length}+ more`;
}