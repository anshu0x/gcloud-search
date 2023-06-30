export function maximizeParagraph(paragraph: string) {
  const words = paragraph.split(" ");
  const extractedWords = words.slice(0, 50);
  return extractedWords.join(" ");
}
