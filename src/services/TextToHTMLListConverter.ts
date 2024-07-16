class TextToHTMLListConverterDefault {
  convert(text: string): string {
    return this.replaceEntireList(text);
  }

  private replaceEntireList(text: string): string {
    while (
      this.containsListElement(text, 1) &&
      this.containsValidListElement(text, 1)
    ) {
      text = this.replaceList(text, 1);
    }
    return text;
  }

  private replaceList(text: string, count: number): string {
    const [list, rest] = this.replaceListEntries(text, count);
    if (rest === "") {
      return list;
    } else {
      return `${list}${this.replaceList(rest, count + 1)}`;
    }
  }

  private replaceListEntries(text: string, count: number): [string, string] {
    let listEntryStartIndex = this.getListEntryStartIndex(text, count);
    let listEntryEndIndex = this.getListEntryEndIndex(
      text,
      listEntryStartIndex
    );

    //invalid input
    if (listEntryStartIndex === -1 || listEntryEndIndex === -1) {
      return [text, ""];
    }

    let start = text.slice(0, listEntryStartIndex);
    let listEntry = text.slice(listEntryStartIndex + 3, listEntryEndIndex);
    let rest = text.slice(listEntryEndIndex + 1, text.length);
    return [
      `${start}${count === 1 ? "<ul>" : ""}<li>${listEntry}</li>${
        this.isLastElementInList(rest, count) ? "</ul>" : ""
      }`,
      rest,
    ];
  }

  private getListEntryIndex(text: string, listCount: number): number {
    return text.indexOf(`${listCount}. `);
  }

  private isLastElementInList(text: string, currentListCount: number): boolean {
    return !text.startsWith(`${currentListCount + 1}. `);
  }

  private containsListElement(text: string, listCount: number): boolean {
    return text.indexOf(`${listCount}. `) !== -1;
  }

  private containsValidListElement(text: string, listCount: number): boolean {
    let listEntryStartIndex = this.getListEntryStartIndex(text, listCount);
    let listEntryEndIndex = this.getListEntryEndIndex(
      text,
      listEntryStartIndex
    );
    if (listEntryStartIndex === -1 || listEntryEndIndex === -1) {
      return false;
    } else {
      return true;
    }
  }

  private getListEntryStartIndex(text: string, listCount: number) {
    return this.getListEntryIndex(text, listCount);
  }

  private getListEntryEndIndex(text: string, startingFromIndex: number) {
    return text.indexOf("\n", startingFromIndex);
  }
}
export const TextToHTMLListConverter = new TextToHTMLListConverterDefault();
