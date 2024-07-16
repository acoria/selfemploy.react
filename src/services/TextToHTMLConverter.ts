import { TextToHTMLListConverter } from "./TextToHTMLListConverter";

class TextToHTMLConverterDefault {
  convert(text: string): string {
    let newText = this.convertToBold(text);
    newText = this.convertList(newText);
    newText = this.convertLineBreaks(newText);
    return newText;
  }

  private convertList(text: string): string {
    return TextToHTMLListConverter.convert(text);
  }

  private convertLineBreaks(text: string): string {
    return text.replaceAll("\n", "<br>");
  }

  private convertToBold(text: string): string {
    let openingTag = true;
    let char = "**";

    while (text.indexOf(char) !== -1) {
      text = text.replace(char, openingTag ? "<b>" : "</b>");
      openingTag = openingTag ? false : true;
    }
    return text;
  }
}
export const TextToHTMLConverter = new TextToHTMLConverterDefault();
