import { ReadingEntry } from './ReadingEntry';

class ReadingDayModelValidationError extends Error {}

export class ReadingDayModel {
  constructor(
    public completed: boolean,
    public dayIndex: number,
    public period: string,
    public firstReading: ReadingEntry,
    public secondReading: ReadingEntry | undefined,
    public thirdReading: ReadingEntry
  ) {}

  validateDayIndex() {
    const isDayIndexValid =
      Number.isSafeInteger(this.dayIndex) && this.dayIndex > 0;

    if (!isDayIndexValid) {
      throw new ReadingDayModelValidationError(
        `Invalid day index: ${this.dayIndex}`
      );
    }
  }

  validatePeriod() {
    const isPeriodValid = !!this.period;

    if (!isPeriodValid) {
      throw new ReadingDayModelValidationError(
        `Invalid period: ${this.period}`
      );
    }
  }

  validate() {
    this.validateDayIndex();

    this.validatePeriod();

    this.firstReading.validate();

    this.secondReading?.validate();

    this.thirdReading.validate();
  }
}
