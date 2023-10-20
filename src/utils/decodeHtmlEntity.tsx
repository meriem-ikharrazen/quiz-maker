import parse from "html-react-parser";

export function decodeHtmlEntity(text: string) {
  return parse(text);
}
