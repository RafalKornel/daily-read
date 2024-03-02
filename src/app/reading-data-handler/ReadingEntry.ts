class ReadingEntryValidationError extends Error {}

export class ReadingEntry {
  constructor(public name: string) {}

  validate() {
    const isNameValid = !!this.name;

    if (!isNameValid) {
      throw new ReadingEntryValidationError(`Name is not valid: ${this.name}`);
    }

    return isNameValid;
  }
}
